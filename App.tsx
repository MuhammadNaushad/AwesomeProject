/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView, Text } from "react-native";
import My_Routes from "./src/navigation/My_Routes";
import Splash_Screen from "./src/screens/splash/Splash_Screen";
import Login_Screen from "./src/screens/auth/Login_Screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Auth_Stack from "./src/navigation/Auth_Stack";
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <My_Routes></My_Routes>
    </SafeAreaView>
  );
}

export default App;
