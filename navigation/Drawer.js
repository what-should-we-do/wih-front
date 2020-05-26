import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import NotificationScreen from "../screens/NotificationScreen";

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Home" component={NotificationScreen} />
  </Drawer.Navigator>
);
