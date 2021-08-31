import React from 'react';
import {CustomTouchableOpacity} from '../../components/touchableOpacity';
import {setTheme} from '../../store/modules/theme/reducer';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {DefaultThemeProps} from '../../styles/types';
import {useTranslation} from 'react-i18next';
import {Button} from 'react-native';

export const Home = () => {
  const dispatch = useDispatch();

  const setLightTheme = () => dispatch(setTheme('light'));
  const setDarkTheme = () => dispatch(setTheme('dark'));

  const {t, i18n} = useTranslation();
  const changeLang = async (lg: string) => {
    await i18n.changeLanguage(lg);
  };

  return (
    <Container>
      <StyledText>Home screen</StyledText>
      <ButtonsWrapper>
        <CustomTouchableOpacity onPress={setLightTheme}>
          <StyledText>{t('light')}</StyledText>
        </CustomTouchableOpacity>
        <CustomTouchableOpacity onPress={setDarkTheme}>
          <StyledText>{t('dark')}</StyledText>
        </CustomTouchableOpacity>
      </ButtonsWrapper>
      <ButtonsWrapper>
        <Button onPress={() => changeLang('ru')} title="RU" />
        <Button onPress={() => changeLang('en')} title="EN" />
      </ButtonsWrapper>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props: DefaultThemeProps) =>
    props.theme.background.primary};
  padding: 10px;
`;

const StyledText = styled.Text`
  text-align: center;
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
`;

const ButtonsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: auto;
`;
