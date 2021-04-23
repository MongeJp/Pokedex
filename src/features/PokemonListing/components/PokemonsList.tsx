import React from "react";
import { FlatList } from "react-native";

import { PokeCard } from "./PokeCard";
import { Pokemon } from "../../../shared/Pokemon.class";

export const PokemonsList = (props: {
  pokemons: Array<Pokemon>;
  handleOnEnd: Function;
}) => {
  const { pokemons, handleOnEnd } = props;
  const renderItem = ({ item }) => <PokeCard pokemon={item} />;

  return (
    <FlatList
      data={pokemons}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
      onEndReached={handleOnEnd}
      onEndReachedThreshold={0.5}
    />
  );
};
