import { createStackNavigator } from "react-navigation-stack";

export const headerStyles = {
  headerStyle: {
    backgroundColor: "black",
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    color: "white"
  },
  headerTintColor: "white"
};

export const createStack = (screen, title) =>
  createStackNavigator({
    Screen: {
      screen,
      navigationOptions: {
        title,
        ...headerStyles
      }
    }
  });
