import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Auth/Login";

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Log In" component={Login} />
    </Stack.Navigator>
  );
}
