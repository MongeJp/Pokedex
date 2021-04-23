import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const InputContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

const Input = styled.TextInput`
  flex: 1;
  background-color: #eaebec;
  color: #b0b3b5;
  font-size: 16px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 40px;
  padding-left: 15px;
`;

const Button = styled.TouchableOpacity`
  background-color: #e94a41;
  align-items: center;
  justify-content: center;
  padding: 0px 8px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;
export const SearchInput = ({ onSearch }) => {
  const [text, onChangeText] = React.useState("");

  return (
    <InputContainer>
      {/* <Ionicons name="ios-search" size={20} color="#9ea2a5" /> */}
      <Input
        placeholder="Search for a Pokémon"
        placeholderTextColor="#9ea2a5"
        onChangeText={onChangeText}
        value={text}
      />
      <Button onPress={() => onSearch(text)}>
        <Ionicons name="ios-search" size={20} color="white" />
      </Button>
    </InputContainer>
  );
};
