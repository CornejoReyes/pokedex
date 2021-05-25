import React from 'react';
import { View } from 'react-native';
import Entry from './Entry';

const getGamifiedName = (statName: string): string => {
  if (statName === 'hp') return 'HP';
  if (statName === 'attack') return 'Attack';
  if (statName === 'defense') return 'Defense';
  if (statName === 'special-attack') return 'Sp. Atk';
  if (statName === 'special-defense') return 'Sp. Def';
  return 'Speed';
};

const PokemonStats: React.FC<{ details: any; bg: string }> = ({
  details,
  bg,
}) => {
  return (
    <View>
      {details.stats.map((stat: any) => (
        <Entry
          key={`stat-${stat.stat.name}`}
          label={getGamifiedName(stat.stat.name)}
          range={{
            max: 255,
            min: 0,
            value: stat.base_stat,
          }}
          bg={bg}
        />
      ))}
    </View>
  );
};

export default PokemonStats;
