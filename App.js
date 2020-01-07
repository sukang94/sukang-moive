import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import TabNavigation from "./navigation/TabNavigation";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);
  // Apploading으로 부터 주어질 인자 값
  handleLoaded = () => this.setState({ loaded: true });
  // 로딩이 끝난 다음에 발생
  loadedAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
      // 프리로딩중에 폰트를 불려온다.
    });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return <TabNavigation />;
    } else {
      return (
        <AppLoading
          startAsync={this.loadedAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    }
  }
}
