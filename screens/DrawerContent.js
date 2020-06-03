import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Avatar, ListItem } from "react-native-elements";
import { useLogOut } from "../AuthContext";

export default (props) => {
  const logout = useLogOut();
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ margin: 12 }}>
        <ListItem
          leftAvatar={
            <Avatar
              rounded
              size="medium"
              icon={{ name: "user", color: "white", type: "simple-line-icon" }}
              overlayContainerStyle={{ backgroundColor: "rgba(255, 167, 38, 0.7)" }}
            />
          }
          title="유예빈"
          subtitle={"test@gmail.com"}
          titleStyle={{ color: "black", fontSize: 18, fontWeight: "600", marginBottom: 4 }}
          subtitleStyle={{ color: "black", fontWeight: "300" }}
        />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Log Out" onPress={() => logout()} />
    </DrawerContentScrollView>
  );
};
