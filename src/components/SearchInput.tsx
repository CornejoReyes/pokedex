import React from 'react';
import styled from 'styled-components/native';
import Search from '../assets/images/search.svg';
import Close from '../assets/images/close_fill.svg';

const SearchContainer = styled.View`
  width: 100%;
  height: 36px;
  border-radius: 50px;
  margin-top: 8px;
  margin-bottom: 8px;
  background: #f4f4f4;
  flex-direction: row;
`;

const SearchIconContainer = styled.View`
  flex: 1;
  height: 36px;
  padding: 4px;
  align-items: center;
  justify-content: center;
`;

const SearchIcon: React.FC = () => {
  return (
    <SearchIconContainer>
      <Search width={16} height={16} fill="#999" />
    </SearchIconContainer>
  );
};

const SearchInputField = styled.TextInput`
  flex: 6;
`;

const ClearTouchable = styled.TouchableOpacity``;

const ClearContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ClearButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <ClearTouchable onPress={onPress} activeOpacity={0.7}>
      <Close width={16} height={16} fill="#999" />
    </ClearTouchable>
  );
};

interface Props {
  value: string;
  onChangeText: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({ value = '', onChangeText }) => {
  const handleClear = () => {
    onChangeText('');
  };

  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInputField
        value={value}
        onChangeText={onChangeText}
        placeholder="Busca un pokémon"
      />
      {value !== '' && (
        <ClearContainer>
          <ClearButton onPress={handleClear} />
        </ClearContainer>
      )}
    </SearchContainer>
  );
};

export default SearchInput;
