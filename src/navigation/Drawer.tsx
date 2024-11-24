import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/home/Home";
import Home_Bottom_Tab from "./Home_Bottom_Tab";
import SettingScreen from "../screens/settings/Setting";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#f8f9fa",
            width: 250,
          },
          drawerActiveTintColor: "tomato",
          drawerInactiveTintColor: "gray",
          drawerLabelStyle: {
            fontSize: 16,
          },
        }}
      >
        <Drawer.Screen
          name="Home_Bottom_Tab"
          component={Home_Bottom_Tab}
        ></Drawer.Screen>
        <Drawer.Screen name="Settings" component={SettingScreen} />
      </Drawer.Navigator>
    </>
  );
};

export default MyDrawer;
