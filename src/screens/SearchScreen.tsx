import React, { useState } from 'react';
import { Screen, SearchInput } from '../components';
import PokemonList from '../components/PokemonList';

const SearchScreen: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (val: string) => {
    setQuery(val.toLowerCase());
  };

  return (
    <Screen>
      <SearchInput value={query} onChangeText={handleSearch} />
      <PokemonList filter={query} />
    </Screen>
  );
};

export default SearchScreen;
