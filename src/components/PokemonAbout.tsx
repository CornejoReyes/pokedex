import React from 'react';
import { View } from 'react-native';
import Entry from './Entry';

const PokemonAbout: React.FC<{ details: any }> = ({ details }) => {
  return (
    <View>
      <Entry label="Height" value={`${details.height * 10} cm`} />
      <Entry label="Weight" value={`${(details.weight * 100) / 1000} kg`} />
      <Entry
        label="Abilities"
        value={details.abilities.map((a: any) => a.ability.name).join(', ')}
      />
    </View>
  );
};

export default PokemonAbout;
