import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

import { TypeList } from "../components/TypeList";
import { AbilitiesList } from "../components/AbilitiesList";
import { StatsList } from "../components/StatsList";
import { Pokemon } from "../../../shared/Pokemon.class";
import { TabController } from "../../Tabs/components/TabController";

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

const LoadingSpinner = styled.ActivityIndicator`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface DetailsModalProps {
  isVisible: boolean;
  pokemon: Pokemon;
  closeModal: Function;
}

export const DetailsModal = ({
  isVisible,
  pokemon,
  closeModal,
}: DetailsModalProps) => {
  // available tabs
  const tabs = [
    { id: 1, name: "abilities", singular: "ability" },
    { id: 2, name: "types", singular: "type" },
    { id: 3, name: "stats", singular: "stat" },
  ];

  const [tabSelected, setTabSelected] = useState(tabs[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetails(tabSelected.name, tabSelected.singular);
  }, []);

  const getDetails = (detailsType: string, property: string) => {
    setDetails([]);
    setIsLoading(true);
    const detailsArray = pokemon[detailsType].map((element) => {
      const url = element[property].url;
      return axios.get(url);
    });
    Promise.all(detailsArray)
      .then((data) => {
        setDetails(data);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Modal animationType="slide" visible={isVisible}>
      <Header color={pokemon.mainColor}>
        <TouchableOpacity onPress={closeModal}>
          <BackButton name="keyboard-backspace" size={28} color="white" />
        </TouchableOpacity>
        <Info>
          <Picture
            source={{
              uri: pokemon.image,
            }}
            resizeMode="contain"
          />
          <Number>#{pokemon.order}</Number>
          <Name>{pokemon.name}</Name>
          <Type>{pokemon.mainType}</Type>
        </Info>
      </Header>
      <Details>
        <TabController
          tabs={tabs}
          currentTab={tabSelected}
          onPress={(tab) => {
            setTabSelected(tab);
            getDetails(tab.name, tab.singular);
          }}
        />
        {isLoading && !details.length ? (
          <LoadingSpinner size="large" color="#8ac8a2" />
        ) : null}
        {details.length && tabSelected.name === "abilities" ? (
          <AbilitiesList abilities={details} />
        ) : null}
        {tabSelected.name === "stats" ? (
          <StatsList stats={pokemon.stats} />
        ) : null}
        {details.length && tabSelected.name === "types" ? (
          <TypeList types={details} />
        ) : null}
      </Details>
    </Modal>
  );
};
