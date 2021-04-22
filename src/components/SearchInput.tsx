import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const InputContainer = styled.View`
  background-color: #eaebec;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  padding-left: 15px;
  margin-top: 8px;
`;

const Input = styled.TextInput`
  background-color: #eaebec;
  color: #b0b3b5;
  font-size: 16px;
  border-radius: 12px;
  height: 40px;
  padding-left: 5px;
`;
export const SearchInput = ({ onChange }) => {
  return (
    <InputContainer>
      <Ionicons name="ios-search" size={20} color="#9ea2a5" />
      <Input
        placeholder="Search for a Pokémon"
        placeholderTextColor="#9ea2a5"
        onChangeText={onChange}
      />
    </InputContainer>
  );
};
