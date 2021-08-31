import React from 'react';
import styled from 'styled-components/native';
import {DefaultThemeProps} from '../../../src/styles/types';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {authorization} from '../../store/modules/authorization/actions';

export const Authorization = () => {
  const dispatch = useDispatch();
  const auth = () => dispatch(authorization());

  return (
    <Container>
      <StyledText>React Native App</StyledText>
      <StyledText>Authorization screen</StyledText>
      <Button color="blue" title="Authorize" onPress={auth} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  margin-bottom: 20px;
`;
