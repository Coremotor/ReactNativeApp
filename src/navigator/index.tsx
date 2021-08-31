import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../screens/home';
import {Authorization} from '../screens/authorization';
import {RootStackParamList, Screens} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {About} from '../screens/about';
import SvgHome from '../assets/svg/home';
import SvgAbout from '../assets/svg/about';
import {Profile} from '../screens/profile';
import SvgProfile from '../assets/svg/profile';
import {useSelector} from 'react-redux';
import {getIsAuth} from '../store/modules/authorization/selectors';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={Screens.Home}
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <SvgHome fill={focused ? 'red' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.About}
        component={About}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <SvgAbout fill={focused ? 'red' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Profile}
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <SvgProfile fill={focused ? 'red' : 'black'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const Navigator = () => {
  const isAuth = useSelector(getIsAuth);
  console.log('nav', isAuth);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isAuth ? (
          <RootStack.Screen name={Screens.Main} component={TabStack} />
        ) : (
          <RootStack.Screen
            name={Screens.Authorization}
            component={Authorization}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
