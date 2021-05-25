/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/display-name */
import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ApplicationRoutesParamList } from '../navigators';
import {
  PokemonHeader,
  PokemonSections,
  PokemonAbout,
  PokemonStats,
} from '../components';

const DetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<ApplicationRoutesParamList, 'Details'>>();
  const sections = [
    {
      key: 'about',
      name: 'About',
      component: () => <PokemonAbout details={route.params.details} />,
    },
    {
      key: 'stats',
      name: 'Stats',
      component: () => (
        <PokemonStats bg={route.params.bg} details={route.params.details} />
      ),
    },
    {
      key: 'evolution',
      name: 'Evolution',
      component: () => <Text>Evolution</Text>,
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <PokemonHeader {...route.params} />
      <PokemonSections sections={sections} color={route.params.bg} />
    </View>
  );
};

export default DetailScreen;
