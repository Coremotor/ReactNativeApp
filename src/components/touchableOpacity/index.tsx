import React, {FC, ReactNode} from 'react';
import styled from 'styled-components/native';
import {DefaultThemeProps} from '../../styles/types';

interface ICustomTouchableOpacity {
  onPress: () => void;
  children: ReactNode;
}

export const CustomTouchableOpacity: FC<ICustomTouchableOpacity> = (
  props: ICustomTouchableOpacity,
) => {
  return (
    <StyledTouchableOpacity onPress={props.onPress}>
      {props.children}
    </StyledTouchableOpacity>
  );
};

const StyledTouchableOpacity = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: DefaultThemeProps) =>
    props.theme.background.primary};
  border: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  padding: 10px 20px;
`;
