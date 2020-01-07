import React from "react";
import { Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Movies from "./../screens/Movies";
import Seach from "../screens/Seach";
import Tv from "../screens/Tv";
import { BG_COLOR } from "../constants/Colors";

const TabNavigator = createBottomTabNavigator(
  {
    Moives: { screen: Movies },
    TV: { screen: Tv },
    Search: { screen: Seach }
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigator);
