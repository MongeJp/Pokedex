import React from "react";
import { FlatList } from "react-native";

import { PokeCard } from "./PokeCard";

export const PokemonsList = (props: {
  pokemons: Array<any>;
  handleOnEnd: Function;
}) => {
  const { pokemons, handleOnEnd } = props;
  const renderItem = ({ item }) => <PokeCard pokemon={item.data} />;

  return (
    <FlatList
      data={pokemons}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.data.id)}
      onEndReached={handleOnEnd}
      onEndReachedThreshold={0.5}
    />
  );
};
