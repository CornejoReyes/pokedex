import React from 'react';
import styled from 'styled-components/native';
import { usePokemonDetail } from '../hooks';
import { capitalize } from '../utils';
import { ListablePokemon } from '../utils/PokemonAPI';

interface CardProps {
  bg: string;
}

const Card = styled.TouchableHighlight<CardProps>`
  background: ${props => props.bg};
  border-radius: 8px;
  margin-bottom: 8px;
  height: 90px;
  width: 100%;
`;

const CardContent = styled.View`
  flex-direction: row;
`;

const SpriteContainer = styled.View`
  flex: 1;
  padding: 4px;
`;

const Sprite = styled.Image`
  width: 100%;
  height: 100%;
`;

const PokemonDataContainer = styled.View`
  flex: 3;
  height: 100%;
  padding-top: 8px;
`;

const PokemonName = styled.Text`
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: bold;
`;

const PokemonId = styled.Text`
  color: #ffffff;
  position: absolute;
  bottom: 0px;
  right: 4px;
  opacity: 0.6;
  font-size: 32px;
  font-weight: bold;
`;

const PokemonTypes = styled.View`
  flex-direction: row;
  margin-top: 4px;
`;

const TypeName = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;

const TypeBadge = styled.View`
  background: #fff4;
  border-radius: 50px;
  padding: 4px 12px;
  margin-right: 4px;
`;

const Type: React.FC<{ type: string }> = ({ type }) => (
  <TypeBadge>
    <TypeName>{type}</TypeName>
  </TypeBadge>
);

const PokemonData: React.FC<{ pokemon: ListablePokemon; types: string[] }> = ({
  pokemon,
  types,
}) => {
  return (
    <PokemonDataContainer>
      <PokemonName>{capitalize(pokemon.name)}</PokemonName>
      <PokemonTypes>
        {types.map(type => (
          <Type key={`${pokemon.name}-${type}`} type={type} />
        ))}
      </PokemonTypes>
    </PokemonDataContainer>
  );
};

interface Props {
  pokemon: ListablePokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const { loading, details, types, bgColor } = usePokemonDetail(pokemon.id);
  return (
    <Card bg={bgColor}>
      <CardContent>
        <SpriteContainer>
          <Sprite
            resizeMethod="scale"
            resizeMode="contain"
            source={{ uri: pokemon.image }}
          />
        </SpriteContainer>
        <PokemonData pokemon={pokemon} types={types} />
        <PokemonId>#{pokemon.id.toString().padStart(4, '0')}</PokemonId>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
