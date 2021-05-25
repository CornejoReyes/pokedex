/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import styled from 'styled-components/native';

const EntryContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 16px;
`;

const EntryLabelContainer = styled.View`
  flex: 3;
`;

const EntryLabel = styled.Text`
  font-weight: bold;
  color: #424242;
  font-size: 14px;
`;

const EntryValueContainer = styled.View`
  flex: 9;
  padding-left: 16px;
`;

const EntryValue = styled.Text`
  color: #424242;
  font-size: 14px;
`;

const RangeContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const RangeText = styled.Text`
  color: #424242;
  font-size: 12px;
`;

const RangeLimitContainer = styled.View`
  width: 40px;
  align-items: center;
  justify-content: center;
`;

const RangeLimit: React.FC<{ value: number }> = ({ value }) => {
  return (
    <RangeLimitContainer>
      <RangeText>{value}</RangeText>
    </RangeLimitContainer>
  );
};

const RangeBarBackground = styled.View`
  flex: 1;
  height: 5px;
  border-radius: 3px;
  background: #cecece;
`;

const RangeFill = styled.View<{ width: string; bg: string }>`
  height: 5px;
  border-radius: 3px;
  background: #cecece;
  width: ${props => props.width}%;
  background: ${props => props.bg};
`;

const RangeVal = styled.Text<{ color: string; position: number }>`
  color: ${props => props.color};
  font-weight: bold;
  font-size: 10px;
  background: white;
  padding: 4px;
  border-radius: 4px;
  shadow-color: rgba(22, 22, 22, 0.2);
  shadow-offset: 0px 2px;
  shadow-radius: 3px;
  shadow-opacity: 1;
  min-width: 20px;
  height: 20px;
  position: absolute;
  left: ${props => props.position}%;
  top: -8px;
  transform: translate(-10px);
`;

const RangeBar: React.FC<{ max: number; value: number; bg: string }> = ({
  max,
  value,
  bg,
}) => (
  <RangeBarBackground>
    <RangeFill bg={bg} width={`${(value * 100) / max}`} />
    <RangeVal position={(value * 100) / max} color={bg}>
      {value}
    </RangeVal>
  </RangeBarBackground>
);

interface RangeProps {
  min: number;
  value: number;
  max: number;
  bg: string;
}

const EntryRange: React.FC<RangeProps> = ({ min, max, value, bg }) => {
  return (
    <RangeContainer>
      <RangeLimit value={min} />
      <RangeBar bg={bg} value={value} max={max} />
      <RangeLimit value={max} />
    </RangeContainer>
  );
};

interface Props {
  label: string;
  value?: string;
  range?: {
    min: number;
    max: number;
    value: number;
  };
  bg?: string;
}

const Entry: React.FC<Props> = ({ label, value, bg, range }) => {
  return (
    <EntryContainer>
      <EntryLabelContainer>
        <EntryLabel>{label}</EntryLabel>
      </EntryLabelContainer>
      <EntryValueContainer>
        {value && <EntryValue>{value}</EntryValue>}
        {range && <EntryRange {...range} bg={bg!} />}
      </EntryValueContainer>
    </EntryContainer>
  );
};

export default Entry;
