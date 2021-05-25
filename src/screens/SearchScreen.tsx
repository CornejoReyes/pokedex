import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Screen, SearchInput } from '../components';
import PokemonList from '../components/PokemonList';

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');

  return (
    <Screen>
      <SearchInput value={query} onChangeText={setQuery} />
      <PokemonList filter={query} />
    </Screen>
  );
};

export default SearchScreen;
