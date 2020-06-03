import React from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";

export default ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text style={{ fontSize: 24 }}>설정 화면</Text>
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Text style={{ margin: 8, color: "blue" }}>Menu</Text>
    </TouchableOpacity>
  </View>
);
