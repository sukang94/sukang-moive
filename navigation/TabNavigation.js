import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Movies from "./../screens/Movies";
import Seach from "../screens/Seach";
import Tv from "../screens/Tv";
import TabBarIcon from "../components/TabBarlcon";
import { createStackNavigator } from "react-navigation-stack";
import { createStack } from "../navigation/config";

const TabNavigator = createBottomTabNavigator(
  {
    Moives: {
      screen: createStackNavigator({
        Movies: {
          screen: Movies,
          navigationOptions: { title: "서울 동작구 장승배기로4길 9" }
        }
      }),
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
      screen: createStack(Tv, "티비"),
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
      screen: createStack(Seach, "검색"),
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
