import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LogIn from "../screens/Auth/LogIn";

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Log In" component={LogIn} />
    </Stack.Navigator>
  );
}
