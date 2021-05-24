import { useNavigation } from '@react-navigation/core';
import React from 'react';
import styled from 'styled-components/native';
import ChevronLeft from '../assets/images/chevron_left.svg';

const Touchable = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

const BackButton: React.FC = () => {
  const navigation = useNavigation();

  const handleBack = () => navigation.goBack();

  return (
    <Touchable onPress={handleBack} activeOpacity={0.7}>
      <ChevronLeft width="100%" height="100%" fill="#FFF" />
    </Touchable>
  );
};

export default BackButton;
