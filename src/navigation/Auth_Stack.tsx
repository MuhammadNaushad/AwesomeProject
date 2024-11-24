import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash_Screen from "../screens/splash/Splash_Screen";
import Login_Screen from "../screens/auth/Login_Screen";
import Register_Screen from "../screens/auth/Register_Screen";
import Home_Bottom_Tab from "./Home_Bottom_Tab";
import MyDrawer from "./Drawer";

const Stack = createNativeStackNavigator();

const Auth_Stack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash_Screen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen name="Login" component={Login_Screen}></Stack.Screen>
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Auth_Stack;
