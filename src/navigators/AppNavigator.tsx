import React from 'react';
import {
  createStackNavigator,
  StackHeaderProps,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { DetailScreen, SearchScreen } from '../screens';
import { Header } from '../components';
import { ApplicationRoutesParamList } from './types';

const Stack = createStackNavigator<ApplicationRoutesParamList>();

const PokemonHeader: React.FC<StackHeaderProps> = props => (
  <Header {...props} />
);

const AppNavigator: React.FC = () => {
  const screenOptions: StackNavigationOptions = { header: PokemonHeader };
  return (
    <Stack.Navigator headerMode="screen" screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={SearchScreen} />
      <Stack.Screen
        name="Details"
        options={{ headerShown: false, header: () => null }}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
