import React from "react";
import styled from "styled-components/native";
import { getTypeColor } from "../../../utils/colors";

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

const Tag = styled.Text`
  color: white;
  background-color: ${(props) => props.color};
  font-weight: bold;
  margin: 10px 6px;
  padding: 3px 4px;
  width: 100px;
  text-align: center;
  border-radius: 12px;
  text-transform: capitalize;
`;

const Description = styled.Text`
  color: #767b7e;
  font-size: 16px;
  font-weight: 600;
`;

export const TypeList = ({ types }) => {
  const listTypes = () =>
    types.map((type) => {
      return (
        <Section key={type.data.id}>
          <Tag color={getTypeColor(type.data.name)}>{type.data.name}</Tag>
          <Description>
            Pokemons of type {type.data.name} have a move damage class of: "
            {`${type.data.move_damage_class.name}`}"
          </Description>
        </Section>
      );
    });

  return (
    <Container>
      <Title>Types</Title>
      {listTypes()}
    </Container>
  );
};
