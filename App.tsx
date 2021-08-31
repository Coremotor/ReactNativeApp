import React, {Suspense, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {DefaultTheme, ThemeProvider} from 'styled-components';
import lightTheme from './src/styles/lightTheme';
import darkTheme from './src/styles/darkTheme';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {getTheme} from './src/store/modules/theme/selectors';
import {store} from './src/store/store';
import {Navigator} from './src/navigator';
import {getDataFromStorage, STORAGE_TOKEN_KEY} from './src/api/storage';
import {setAuth} from './src/store/modules/authorization/reducer';
import './src/i18next/i18next';

const App = () => {
  return (
    <Suspense
      fallback={
        <View>
          <Text>Loading...</Text>
        </View>
      }>
      <Provider store={store}>
        <Main />
      </Provider>
    </Suspense>
  );
};

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('effect');
    const token = !!getDataFromStorage(STORAGE_TOKEN_KEY);
    if (token) {
      dispatch(setAuth(true));
    }
  }, [dispatch]);

  const themes: {[key: string]: DefaultTheme} = {
    light: lightTheme,
    dark: darkTheme,
  };

  const deviceColorScheme = useColorScheme() || 'light';
  const theme = useSelector(getTheme) || deviceColorScheme;

  return (
    <ThemeProvider theme={themes[theme]}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
          backgroundColor={
            theme === 'light'
              ? lightTheme.background.primary
              : darkTheme.background.primary
          }
        />
        <Navigator />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
