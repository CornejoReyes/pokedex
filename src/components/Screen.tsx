import React from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

const Contents = styled.KeyboardAvoidingView`
  flex: 1;
  background: #f0f0f0;
  padding-left: 24px;
  padding-right: 24px;
`;

const Inner = styled.View`
  flex: 1;
`;

const Screen: React.FC = ({ children }) => {
  return (
    <Contents behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Inner>{children}</Inner>
      </TouchableWithoutFeedback>
    </Contents>
  );
};

export default Screen;
