import { useNavigation } from '@react-navigation/core';
import React from 'react';
import styled from 'styled-components/native';
import ArrowLeft from '../assets/images/arrow_left.svg';

const Touchable = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  margin-left: -5px;
`;

const BackButton: React.FC = () => {
  const navigation = useNavigation();

  const handleBack = () => navigation.goBack();

  return (
    <Touchable onPress={handleBack} activeOpacity={0.7}>
      <ArrowLeft width="100%" height="100%" fill="#ffffff" />
    </Touchable>
  );
};

export default BackButton;
