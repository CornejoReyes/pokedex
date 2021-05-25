import { ListablePokemon } from '../utils/PokemonAPI';

export type ApplicationRoutesParamList = {
  Home: undefined;
  Details: {
    pokemon: ListablePokemon;
    details: any;
    types: string[];
    bg: string;
  };
};
