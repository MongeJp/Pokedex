import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

import { getTypeColor } from "../utils/colors";
import { addZeros } from "../utils/methods";
import { Option } from "../components/Option";
import { TypeList } from "../components/TypeList";
import { AbilitiesList } from "./../components/AbilitiesList";
import { StatsList } from "../components/StatsList";

const Modal = styled.Modal`
  flex: 1;
`;

const Header = styled.View`
  background-color: ${(props) => props.color};
  padding: 20px;
`;

const Info = styled.View`
  align-items: center;
  justify-content: center;
`;

const Name = styled.Text`
  color: #fdfcfe;
  font-size: 26px;
  font-weight: bold;
  text-transform: capitalize;
`;

const Type = styled.Text`
  color: #fdfcfe;
  font-size: 12px;
  font-weight: bold;
  text-transform: capitalize;
`;

const Picture = styled.Image`
  height: 80px;
  width: 80px;
`;

const BackButton = styled(MaterialIcons)`
  font-weight: bold;
`;

const Number = styled.Text`
  color: white;
  opacity: 0.5;
  font-size: 18px;
  font-weight: bold;
`;

const Details = styled.View`
  flex: 1;
  padding: 20px;
`;

const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailsModal = (props: {
  isVisible: boolean;
  pokemon: object;
  closeModal: Function;
}) => {
  const { isVisible, pokemon, closeModal } = props;
  const type = pokemon.types[0].type.name;
  const numOrder = addZeros(pokemon.id);

  const [abilities, setAbilities] = useState([]);
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([]);
  const [optionSelected, setOptionSelected] = useState("abilities");

  useEffect(() => {
    getAbilities();
  }, []);

  const getAbilities = () => {
    const abilitiesArray = pokemon.abilities.map((element) => {
      const url = element.ability.url;
      return axios.get(url);
    });
    Promise.all(abilitiesArray).then((data) => {
      setAbilities(data);
    });
  };

  const getTypes = () => {
    const typesArray = pokemon.types.map((element) => {
      const url = element.type.url;
      return axios.get(url);
    });
    Promise.all(typesArray).then((data) => {
      setTypes(data);
    });
  };

  const getStats = () => {
    const typesArray = pokemon.stats.map((element) => {
      const url = element.stat.url;
      return axios.get(url);
    });
    Promise.all(typesArray).then((data) => {
      setStats(data);
    });
  };

  return (
    <Modal animationType="slide" visible={isVisible}>
      <Header color={getTypeColor(type)}>
        <TouchableOpacity onPress={closeModal}>
          <BackButton name="keyboard-backspace" size={28} color="white" />
        </TouchableOpacity>
        <Info>
          <Picture
            source={{
              uri: pokemon.sprites.front_default,
            }}
            resizeMode="contain"
          />
          <Number>#{numOrder}</Number>
          <Name>{pokemon.name}</Name>
          <Type>{type}</Type>
        </Info>
      </Header>
      <Details>
        <OptionsContainer>
          <Option
            title="Abilities"
            onPress={() => {
              setOptionSelected("abilities");
              getAbilities();
            }}
            isSelected={optionSelected === "abilities"}
          />
          <Option
            title="Stats"
            onPress={() => {
              setOptionSelected("stats");
              getStats();
            }}
            isSelected={optionSelected === "stats"}
          />
          <Option
            title="Types"
            onPress={() => {
              setOptionSelected("types");
              getTypes();
            }}
            isSelected={optionSelected === "types"}
          />
        </OptionsContainer>
        {abilities.length && optionSelected === "abilities" ? (
          <AbilitiesList abilities={abilities} />
        ) : null}
        {optionSelected === "stats" ? (
          <StatsList stats={pokemon.stats} />
        ) : null}
        {types.length && optionSelected === "types" ? (
          <TypeList types={types} />
        ) : null}
      </Details>
    </Modal>
  );
};
