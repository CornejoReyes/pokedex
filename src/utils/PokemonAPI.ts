import { create } from 'apisauce';
import Storage from './Storage';

interface PaginationParams {
  limit: number;
  offset?: number;
}

interface PokemonResult {
  name: string;
  url: string;
}

interface PokemonResults {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
}

export interface ListablePokemon {
  id: number;
  name: string;
  image: string;
}

export default class PokemonAPI {
  public static async getPokemons(): Promise<ListablePokemon[] | null> {
    try {
      const cachedPokemons = await Storage.get('pokemons');
      if (cachedPokemons === null) {
        return this.loadPokemons();
      }
      return cachedPokemons;
    } catch (error) {
      console.log('Failed to get pokemons');
    }
    return [];
  }

  public static async fetchPokemons({ limit, offset }: PaginationParams) {
    let url = `/pokemon?limit=${limit}`;
    if (offset) {
      url += `&offset=${offset}`;
    }
    const result = await this.instance.get<PokemonResults>(url);
    if (result.ok) {
      const parsed = result.data?.results.map(pokemon =>
        this.parsePokemonData(pokemon),
      );
      return {
        data: parsed,
        next: result.data?.next,
      };
    }
    return { data: null, error: 'Failed to get pokemon', next: null };
  }

  public static async fetchPokemon(id: number) {
    const result = await this.instance.get<any>(`/pokemon/${id}`);
    if (result.ok) {
      return result.data;
    }
    return { error: 'Failed to get pokemon' };
  }

  private static instance = create({
    baseURL: 'https://pokeapi.co/api/v2',
  });

  private static async loadPokemons(): Promise<ListablePokemon[] | null> {
    const result = await this.fetchPokemons({ limit: 1118 });
    if (!result.error && result.data && result.data.length > 0) {
      Storage.set('pokemons', result.data);
      return result.data;
    }
    return null;
  }

  private static parsePokemonData({
    url,
    name,
  }: PokemonResult): ListablePokemon {
    const _deconstructedUrl = url.split('/');
    const pokemonId = Number(_deconstructedUrl[_deconstructedUrl.length - 2]);
    return {
      id: pokemonId,
      name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
    };
  }
}
