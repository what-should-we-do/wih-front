import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import DrawerContent from "../screens/DrawerContent";
import Home from "../screens/Home";
import Category from "../screens/Category";
import Business from "../screens/Business";
import Settings from "../screens/Settings";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Category" component={Category} options={{ headerTitle: "업종 선택" }} />
      <Stack.Screen name="Business" component={Business} options={{ headerTitle: "업소 선택" }} />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerContentOptions={{ activeTintColor: "rgb(255, 167, 38)" }}
    >
      <Drawer.Screen name="Home" component={StackScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};
