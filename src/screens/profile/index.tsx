import React from 'react';
import styled from 'styled-components/native';
import {DefaultThemeProps} from '../../../src/styles/types';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/modules/authorization/actions';

export const Profile = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <Container>
      <StyledText>Profile screen</StyledText>
      <Button title="Logout" onPress={onLogout} color="blue" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props: DefaultThemeProps) =>
    props.theme.background.primary};
  padding: 10px;
`;

const StyledText = styled.Text`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  margin-bottom: 20px;
`;
