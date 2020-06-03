import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Category from "../screens/Category";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Stack.Screen options={{ headerTitle: "업종 선택" }} name="Category" component={Category} />
  </Stack.Navigator>
);
