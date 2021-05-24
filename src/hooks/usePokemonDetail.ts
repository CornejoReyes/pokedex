import { useState, useEffect } from 'react';
import { getColorByType, PokemonAPI } from '../utils';

const usePokemonDetail = (pokemonId: number) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<any>(null);
  const [types, setTypes] = useState<any[]>([]);

  const fetchDetails = async () => {
    setLoading(true);
    const result = await PokemonAPI.fetchPokemon(pokemonId);
    setLoading(false);
    if (!result.error) {
      setPokemon(result);
      setTypes(result.types.map((type: any) => type.type.name));
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return {
    loading,
    details: pokemon,
    types,
    bgColor: getColorByType(types[0]),
  };
};

export default usePokemonDetail;
