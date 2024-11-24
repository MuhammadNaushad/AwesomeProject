import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth_Stack from "./Auth_Stack";

const Stack = createNativeStackNavigator();

const My_Routes = () => {
  return (
    <NavigationContainer>
      <Auth_Stack></Auth_Stack>
    </NavigationContainer>
  );
};

export default My_Routes;
