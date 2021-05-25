import React from 'react';
import styled from 'styled-components/native';

const PokemonTypesContainer = styled.View`
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

const PokemonTypes: React.FC<{ types: string[] }> = ({ types }) => {
  return (
    <PokemonTypesContainer>
      {types.map(type => (
        <Type key={type} type={type} />
      ))}
    </PokemonTypesContainer>
  );
};

export default PokemonTypes;
