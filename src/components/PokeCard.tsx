import React from "react";
import styled from "styled-components/native";

const Card = styled.View`
  background-color: #92cba7;
  height: 100px;
  padding: 0px 20px;
  margin: 8px 16px;
  border-radius: 22px;
  flex-direction: row;
  align-items: center;
`;

const Picture = styled.Image`
  width: 90px;
  height: 90px;
`;

const Name = styled.Text`
  color: #fdfcfe;
  font-size: 26px;
  font-weight: bold;
  padding-top: 10px;
  padding-left: 15px;
  text-transform: capitalize;
`;

export const PokeCard = (props) => {
  return (
    <Card>
      <Picture
        source={{
          uri: props.pokemon.sprites.front_default,
        }}
      />
      <Name>{props.pokemon.name}</Name>
    </Card>
  );
};
