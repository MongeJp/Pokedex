import React from "react";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
`;
const Title = styled.Text`
  color: #2cb16b;
  font-size: 18px;
  font-weight: bold;
  margin: 30px 0px 10px 0px;
`;

const Section = styled.View`
  flex-direction: row;
  padding: 5px 0px;
`;

const Property = styled.Text`
  color: #6e7275;
  font-weight: bold;
  margin: 10px 4px;
  text-transform: capitalize;
`;

const Value = styled.Text`
  color: #5abb82;
  font-weight: bold;
  margin: 10px 0px;
`;

export const StatsList = ({ stats }) => {
  const renderStats = () =>
    stats.map((stat) => {
      return (
        <Section key={stat.stat.id}>
          <Property>{stat.stat.name}:</Property>
          <Value>{stat.base_stat}</Value>
        </Section>
      );
    });
  return (
    <Container>
      <Title>Stats</Title>
      {renderStats()}
    </Container>
  );
};
