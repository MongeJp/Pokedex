import React, { useEffect, useState } from "react";
import { StatusBar, FlatList, Text } from "react-native";
import styled from "styled-components/native";
import { PokeCard } from "../components/PokeCard";
import { SearchInput } from "../components/SearchInput";
import axios from "axios";
import { PokemonsList } from "./../components/PokemonsList";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:  ${StatusBar.currentHeight}px`};
  background-color: #fafcfc;
`;

const Header = styled.View`
  padding: 20px;
`;

const Title = styled.Text`
  color: #e94a41;
  font-size: 26px;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  color: #767b7e;
  font-size: 16px;
  font-weight: 600;
  margin-top: 15px;
`;

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );

  useEffect(() => {
    getPokemonsList();
  }, []);

  const getPokemonsList = () => {
    axios
      .get(nextUrl)
      .then(function (response) {
        const pokemonsList = response["data"]["results"];
        setNextUrl(response.data.next);
        const results = pokemonsList.map((pokemon: object) =>
          getPokemonData(pokemon.url)
        );
        return Promise.all(results);
      })
      .then((data) => {
        setPokemons([...pokemons, ...data]);
      });
  };

  const getPokemonData = (url: string): Promise<Object> => {
    return axios.get(url);
  };

  const search = (value: string) => {
    if (searchText === "") return;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then(function (response) {
        const pokemonsList = response["data"]["results"];

        const results = pokemonsList.map((pokemon: object) =>
          getPokemonData(pokemon.url)
        );
        return Promise.all(results);
      })
      .then((data) => {
          console.log(data);
        setPokemons(data);
      });
  };

  return (
    <SafeArea>
      <Header>
        <Title>Pokédex</Title>
        <SearchInput onChange={(value) => search(value)} />
        <Subtitle>
          The Pokédex contains detailed stats for every creature from the
          Pokémon games.
        </Subtitle>
      </Header>
      {isLoading ? (
        <Text>Cargando</Text>
      ) : (
        <PokemonsList pokemons={pokemons} handleOnEnd={getPokemonsList} />
      )}
    </SafeArea>
  );
}
