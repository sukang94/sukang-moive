import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Movies</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <Text> Go to detail</Text>
    </TouchableOpacity>
  </View>
);
