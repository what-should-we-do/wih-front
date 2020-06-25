import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../screens/DrawerContent";
import Home from "../screens/Home";
import Location from "../screens/Location";
import Category from "../screens/Category";
import Business from "../screens/Business";
import Result from "../screens/Result";
import Settings from "../screens/Settings";
import { NavigationHelpersContext } from "@react-navigation/native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "홈", headerShown: false }}
      />
      <Stack.Screen name="Location" component={Location} options={{ headerTitle: "위치 선택" }} />
      <Stack.Screen name="Category" component={Category} options={{ headerTitle: "업종 선택" }} />
      <Stack.Screen name="Business" component={Business} options={{ headerTitle: "업소 선택" }} />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{
          headerTitle: "결과 화면",
          headerRight: () => <Button onPress={() => navigation.navigate("Home")} title="홈으로" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerContentOptions={{ activeTintColor: "rgb(255, 167, 38)" }}
    >
      <Drawer.Screen name="홈" component={StackScreen} />
      <Drawer.Screen name="설정" component={Settings} />
    </Drawer.Navigator>
  );
};
