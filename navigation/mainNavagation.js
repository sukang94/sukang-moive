import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";

const MainNavigation = createStackNavigator(
  {
    Tab: { screen: TabNavigation, navigationOptions: { header: null } },
    Detail: DetailScreen
  },
  {
    // mode: "modal" // 카드 애니메이션임
  }
);

export default createAppContainer(MainNavigation);