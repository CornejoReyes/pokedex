import { StackHeaderProps } from '@react-navigation/stack';
import React from 'react';
import { EdgeInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Pokemon from '../assets/images/pokemon_logo.svg';
import BackButton from './BackButton';

interface HeaderContainerProps {
  insets: EdgeInsets;
}

const HeaderContainer = styled.View<HeaderContainerProps>`
  height: ${props => (props.insets.top ? 60 + props.insets.top : 60)}px;
  width: 100%;
  background: #cc0000;
  align-items: center;
  justify-content: center;
  padding-top: ${props => props.insets.top || 0}px;
`;

const LogoContainer = styled.View`
  height: 40px;
  width: 120px;
`;

const Floating = styled.View<HeaderContainerProps>`
  position: absolute;
  left: 24px;
  top: ${({ insets: { top } }) => (top ? top + 10 : 10)}px;
`;

const Header: React.FC<StackHeaderProps> = ({ navigation, insets, mode }) => {
  console.log(mode);
  const currentNavigationIndex = navigation.dangerouslyGetState().index;
  const isRootScreen = currentNavigationIndex === 0;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <HeaderContainer insets={insets}>
        <LogoContainer>
          <Pokemon height="100%" width="100%" />
        </LogoContainer>
        {!isRootScreen && (
          <Floating insets={insets}>
            <BackButton />
          </Floating>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
