import { useState, useEffect } from 'react';
import PokemonAPI, { ListablePokemon } from '../utils/PokemonAPI';

const usePaginatedPokemon = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const limit = 50;
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [pokemons, setPokemons] = useState<ListablePokemon[]>([]);

  const loadMore = async () => {
    if (hasMore && !loading) {
      setLoading(true);
      const result = await PokemonAPI.fetchPokemons({ limit, offset });
      setLoading(false);
      setHasMore(typeof result.next === 'string');
      if (!result.error && result.data) {
        setOffset(offset + limit);
        setPokemons([...pokemons, ...result.data]);
      }
    }
  };

  useEffect(() => {
    loadMore();
  }, []);

  return {
    loading,
    pokemons,
    loadMore,
  };
};

export default usePaginatedPokemon;
