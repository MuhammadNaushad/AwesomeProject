import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Login_Screen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Login_Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Drawer")}
      ></Button>
    </View>
  );
};

export default Login_Screen;
