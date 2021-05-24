import { create } from 'apisauce';

export default class PokemonAPI {
  public static loadPokemons(): void {}

  private instance = create({
    baseURL: 'https://pokeapi.co/api/v2',
  });
}
