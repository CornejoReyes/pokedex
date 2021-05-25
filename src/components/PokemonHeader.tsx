import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ListablePokemon } from '../utils/PokemonAPI';
import { capitalize } from '../utils';
import { PokemonTypes } from '.';
import Svg, { Circle } from 'react-native-svg';
import BackButton from './BackButton';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const HEADER_HEIGHT = DEVICE_HEIGHT * 0.35;
const IMAGE_SIZE = DEVICE_WIDTH * 0.4;

const HeaderContainer = styled.View<{ insets: EdgeInsets }>`
  padding-top: ${props => (props.insets?.top ? props.insets.top + 16 : 16)}px;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding-left: 24px;
  padding-right: 24px;
`;

const Background = styled(Svg)`
  position: absolute;
  width: ${DEVICE_WIDTH}px;
  height: ${HEADER_HEIGHT}px;
`;

const PokemonId = styled.Text`
  color: #ffffff88;
  font-size: 20px;
  font-weight: bold;
`;

const PokemonName = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

const PokemonImage = styled.Image`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  align-self: center;
`;

interface Props {
  pokemon: ListablePokemon;
  details: any;
  types: string[];
  bg: string;
}

const PokemonHeader: React.FC<Props> = ({ pokemon, details, types, bg }) => {
  console.log(pokemon, details, types, bg);
  const insets = useSafeAreaInsets();

  return (
    <HeaderContainer insets={insets}>
      <Background viewBox="0 0 100 100">
        <Circle fill={bg} cx="50" cy="-50" r="150" />
      </Background>
      <BackButton />
      <PokemonId>#{pokemon.id.toString().padStart(4, '0')}</PokemonId>
      <PokemonName>{capitalize(pokemon.name)}</PokemonName>
      <PokemonTypes types={types} />
      <PokemonImage source={{ uri: pokemon.image }} />
    </HeaderContainer>
  );
};

export default PokemonHeader;
