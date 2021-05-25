import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { PokemonCard } from '.';
import { usePaginatedPokemon } from '../hooks';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PokemonAPI, { ListablePokemon } from '../utils/PokemonAPI';

interface Props {
  filter?: string;
}

const ListContainer = styled.View`
  flex: 1;
`;

const PokemonList: React.FC<Props> = ({ filter }) => {
  const { loadMore, pokemons } = usePaginatedPokemon();
  const [searchable, setSearchable] = useState<ListablePokemon[]>([]);

  const renderItem = ({ item: pokemon }: { item: ListablePokemon }) => {
    return <PokemonCard pokemon={pokemon} />;
  };

  const loadSearchablePokemon = async () => {
    const searchablePokemons =
      (await PokemonAPI.getPokemons()) as ListablePokemon[];
    setSearchable(searchablePokemons);
  };

  useEffect(() => {
    loadSearchablePokemon();
  }, []);

  return (
    <ListContainer>
      <FlatList
        data={
          filter
            ? searchable.filter(pokemon => pokemon.name.includes(filter))
            : pokemons
        }
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        onEndReached={loadMore}
        onEndReachedThreshold={0.8}
      />
    </ListContainer>
  );
};

export default PokemonList;
