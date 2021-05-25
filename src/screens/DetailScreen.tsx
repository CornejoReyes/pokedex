import React from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ApplicationRoutesParamList } from '../navigators';
import { PokemonHeader, Screen } from '../components';

const DetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<ApplicationRoutesParamList, 'Details'>>();

  return (
    <View>
      <PokemonHeader {...route.params} />
      {/* <Tabs /> */}
    </View>
  );
};

export default DetailScreen;
