import React from "react";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
`;
const Title = styled.Text`
  color: #2cb16b;
  font-size: 18px;
  font-weight: bold;
  margin: 30px 0px 10px 0px;
`;

const Section = styled.View`
  flex-direction: column;
  padding: 5px 0px;
`;

const Property = styled.Text`
  color: #6e7275;
  font-weight: bold;
  margin: 10px;
  text-transform: capitalize;
`;

const Value = styled.Text`
  color: #5abb82;
  font-weight: bold;
  margin: 10px;
`;

export const AbilitiesList = ({ abilities }) => {
  const renderAbilities = () =>
    abilities.map((ability) => {
      return (
        <Section key={ability.data.id}>
          <Property> - {ability.data.name}</Property>
          <Value>{ability.data.effect_entries[0].effect}</Value>
        </Section>
      );
    });

  return (
    <Container>
      <Title>Abilities</Title>
      {renderAbilities()}
    </Container>
  );
};
