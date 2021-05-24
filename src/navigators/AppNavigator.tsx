import React from 'react';
import {
  createStackNavigator,
  StackHeaderProps,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { DetailScreen, SearchScreen } from '../screens';
import { Header } from '../components';

const Stack = createStackNavigator();

const PokemonHeader: React.FC<StackHeaderProps> = props => (
  <Header {...props} />
);

const AppNavigator: React.FC = () => {
  const screenOptions: StackNavigationOptions = { header: PokemonHeader };
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={SearchScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
