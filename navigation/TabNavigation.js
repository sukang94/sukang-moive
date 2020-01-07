import React from "react";
import { Platform } from "react-native";
import { Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Movies from "./../screens/Movies";
import Seach from "../screens/Seach";
import Tv from "../screens/Tv";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarlcon";

const TabNavigator = createBottomTabNavigator(
  {
    Moives: {
      screen: Movies,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-film" : "md-film"}
            // Platform OS가 ios 입니까? 만약에 ios 이면 ios전용 아이콘 드리고 아니라면 : 안드로이드 드리겠슴
          />
        )
      }
    },
    TV: {
      screen: Tv,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
          />
        )
      }
    },
    Search: {
      screen: Seach,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-search" : "md-Search"}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      //showLabel: false,
      style: {
        backgroundColor: "white"
      }
    }
  }
);

export default createAppContainer(TabNavigator);
