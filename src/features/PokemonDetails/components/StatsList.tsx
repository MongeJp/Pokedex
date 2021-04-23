import React from "react";
import styled from "styled-components/native";
import * as Progress from "react-native-progress";
import { View } from "react-native";

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
  justify-content: space-between;
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

const Info = styled.View`
  flex-direction: row;
`;

const ProgressBar = styled(Progress.Bar)`
  height: 8px;
  align-self: center;
  margin-left: 10px;
`;

export const StatsList = ({ stats }) => {
  const getPercentage = (statValue) => {
    const maxValue = 252;
    let result = statValue / maxValue;
    return Number(result.toFixed(1));
  };
  const renderStats = () =>
    stats.map((stat) => {
      return (
        <Section key={stat.stat.name}>
          <Info>
            <Property>{stat.stat.name}:</Property>
            <Value>{stat.base_stat}</Value>
          </Info>
          <ProgressBar
            progress={getPercentage(stat.base_stat)}
            color="#8ac8a2"
          />
        </Section>
      );
    });
  return (
    <Container>
      <Title>Base stats</Title>
      {renderStats()}
    </Container>
  );
};
