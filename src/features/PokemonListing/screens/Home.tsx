import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import axios from "axios";

import { PokemonsList } from "../components/PokemonsList";
import { Pokemon } from "../../../shared/Pokemon.class";

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
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
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
          axios.get(pokemon.url)
        );
        return Promise.all(results);
      })
      .then((data) => {
        let newPokemons = data.map((pok: any) => new Pokemon(pok.data));
        setPokemons([...pokemons, ...newPokemons]);
      });
  };

  return (
    <SafeArea>
      <Header>
        <Title>Pokédex</Title>
        <Subtitle>
          The Pokédex contains detailed stats for every creature from the
          Pokémon games.
        </Subtitle>
      </Header>
      <PokemonsList pokemons={pokemons} handleOnEnd={getPokemonsList} />
    </SafeArea>
  );
}
