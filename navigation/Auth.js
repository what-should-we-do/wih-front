import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Log In" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Sign Up" component={Signup} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
