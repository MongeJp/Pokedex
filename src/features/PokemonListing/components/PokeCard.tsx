import React, { useState } from "react";
import styled from "styled-components/native";

import { DetailsModal } from "../../PokemonDetails/screens/DetailsModal";
import { Pokemon } from "../../../shared/Pokemon.class";

const Card = styled.TouchableOpacity`
  background-color: ${(props) => props.color};
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

const Info = styled.View`
  flex-direction: column;
  text-align: left;
`;

const Name = styled.Text`
  color: #fdfcfe;
  font-size: 26px;
  font-weight: bold;
  padding-top: 10px;
  text-transform: capitalize;
`;

const Type = styled.Text`
  color: #fdfcfe;
  font-size: 12px;
  font-weight: bold;
  text-transform: capitalize;
`;

const Number = styled.Text`
  color: white;
  opacity: 0.5;
  font-size: 26px;
  font-weight: bold;
  position: absolute;
  bottom: 0px;
  right: 0;
  padding-right: 15px;
`;

export const PokeCard = (props: { pokemon: Pokemon }) => {
  const { pokemon } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!modalVisible);
  return (
    <>
      <Card color={pokemon.mainColor} onPress={toggleModal}>
        <Picture
          source={{
            uri: pokemon.image,
          }}
        />
        <Info>
          <Name>{pokemon.name}</Name>
          <Type>{pokemon.mainType}</Type>
        </Info>
        <Number>#{pokemon.order}</Number>
      </Card>
      {modalVisible ? (
        <DetailsModal
          isVisible={modalVisible}
          pokemon={pokemon}
          closeModal={toggleModal}
        />
      ) : null}
    </>
  );
};
