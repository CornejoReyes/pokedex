const getColorByType = (type: string) => {
  switch (type) {
    case 'grass':
      return '#48d0b0';

    case 'fire':
      return '#fb6c6c';

    case 'water':
      return '#76bdfe';

    case 'bug':
      return '#6bad4a';

    case 'poison':
      return '#b561b5';

    case 'electric':
      return '#ffce4b';

    case 'ground':
      return '#e6bd5a';

    case 'fairy':
      return '#efa3b1';

    case 'fighting':
      return '#a47b73';

    case 'psychic':
      return '#c5a410';

    case 'rock':
      return '#8b8b94';

    case 'ghost':
      return '#62317b';

    case 'flying':
      return '#c9b96c';

    case 'ice':
      return '#4395e8';

    case 'dragon':
      return '#f7b251';

    case 'dark':
      return '#253960';

    default:
      return '#8eadcc';
  }
};

export default getColorByType;
