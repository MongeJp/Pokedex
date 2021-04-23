import React from "react";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  border: 1px solid #f3f4f5;
  border-radius: 8px;
  width: 80px;
  padding: 4px 8px;
  align-items: center;
`;
const Text = styled.Text`
  color: #b5b6b8;
  color: ${(props) => (props.isSelected ? "#45946c" : "#b5b6b8")};
  font-weight: bold;
  font-size: 14px;
  text-transform: capitalize;
`;
export const Tab = ({ onPress, title, isSelected }) => {
  return (
    <Container onPress={onPress}>
      <Text isSelected={isSelected}>{title}</Text>
    </Container>
  );
};
