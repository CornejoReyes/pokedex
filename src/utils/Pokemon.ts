interface PokemonStat {
  name: string;
  value: number;
}

interface PokemonType {
  name: string;
}

export default class Pokemon {
  id: number;
  name: string;
  raw: any;

  constructor(pokemon: any) {
    this.raw = pokemon;
    this.id = pokemon.id;
    this.name = pokemon.name;
  }

  get stats(): PokemonStat[] {
    return this.raw.stats.map((stat: any) => ({
      value: stat.base_stat,
      name: stat.stat.name,
    }));
  }

  get types(): PokemonType[] {
    return this.raw.types.map((type: any) => ({
      name: type.type.name,
    }));
  }

  get image(): string {
    return this.raw.sprites.other['official-artwork'].front_default;
  }
}
