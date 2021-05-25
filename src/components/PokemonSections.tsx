import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
`;

const TabTouchable = styled.TouchableOpacity`
  padding: 4px 12px;
  border-radius: 8px;
  background: #fff;
  shadow-color: rgba(22, 22, 22, 0.2);
  shadow-offset: 0px 2px;
  shadow-radius: 3px;
  shadow-opacity: 1;
`;

const TabText = styled.Text<{ active: boolean; color: string }>`
  color: ${props => (props.active ? props.color : '#a8a8a8')};
  font-weight: bold;
  font-size: 14px;
`;

interface TabProps {
  name: string;
  onPress: () => void;
  active: boolean;
  color: string;
}

const Tab: React.FC<TabProps> = ({ name, onPress, active, color }) => {
  return (
    <TabTouchable onPress={onPress}>
      <TabText active={active} color={color}>
        {name}
      </TabText>
    </TabTouchable>
  );
};

const TabsContainer = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 48px;
`;

const Section = styled.ScrollView`
  flex: 1;
  margin-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

interface Section {
  key: string;
  name: string;
  component: () => JSX.Element;
}

interface Props {
  sections: Section[];
  color: string;
}

const PokemonSections: React.FC<Props> = ({ sections, color }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleTabChange = (index: number) => {
    return () => setActiveIndex(index);
  };

  return (
    <Wrapper>
      <TabsContainer>
        {sections.map((section, index) => (
          <Tab
            onPress={handleTabChange(index)}
            key={section.key}
            name={section.name}
            active={activeIndex === index}
            color={color}
          />
        ))}
      </TabsContainer>
      <Section>{sections[activeIndex].component()}</Section>
    </Wrapper>
  );
};

export default PokemonSections;
