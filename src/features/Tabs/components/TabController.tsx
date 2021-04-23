import React from "react";
import styled from "styled-components/native";

import { Tab } from "./Tab";

const TabContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

interface TabControllerProps {
  onPress: Function;
  currentTab: object;
  tabs: [];
}

export const TabController = ({
  onPress,
  currentTab,
  tabs,
}: TabControllerProps) => {
  const renderTabs = () => {
    return tabs.map((tab) => {
      return (
        <Tab
          key={tab.id}
          title={tab.name}
          onPress={() => onPress(tab)}
          isSelected={currentTab.name === tab.name}
        />
      );
    });
  };

  return <TabContainer>{renderTabs()}</TabContainer>;
};
