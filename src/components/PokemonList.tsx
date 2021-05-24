import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { PokemonCard } from '.';
import { usePaginatedPokemon } from '../hooks';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ListablePokemon } from '../utils/PokemonAPI';

interface Props {
  filter?: string;
}

const ListContainer = styled.View`
  flex: 1;
`;

const PokemonList: React.FC<Props> = () => {
  const { loadMore, pokemons } = usePaginatedPokemon();
  const renderItem = ({ item: pokemon }: { item: ListablePokemon }) => {
    return <PokemonCard pokemon={pokemon} />;
  };

  return (
    <ListContainer>
      <FlatList
        data={pokemons}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        onEndReached={loadMore}
        onEndReachedThreshold={0.8}
      />
    </ListContainer>
  );
};

export default PokemonList;
