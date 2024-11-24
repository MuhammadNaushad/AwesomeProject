import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Register_Screen from "../screens/auth/Register_Screen";
import HomeScreen from "../screens/home/Home";
import SettingScreen from "../screens/settings/Setting";
import MyProfile from "../screens/profile/Profile";
import CategoryScreen from "../screens/category/Category";
import NotificationsPage from "../screens/notification/Notifications";
import Icon from "react-native-vector-icons/Ionicons"; // For icons
import MyDrawer from "./Drawer";

const Tab = createBottomTabNavigator();

const Home_Bottom_Tab = ({ navigation }) => {
  React.useEffect(() => {
    // Enable drawer when on TabHomeScreen
    navigation.setOptions({
      drawerLockMode: "unlocked",
      gestureEnabled: true,
    });
  }, [navigation]);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Notifications") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Setting") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({ focused }) => (
          <Text
            style={{
              fontSize: focused ? 11 : 11,
              fontWeight: focused ? "bold" : "normal",
              color: focused ? "red" : "grey",
            }}
          >
            {route.name}
          </Text>
        ),
      })}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          title: "Home",
          /* tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#f8f9fa",
            borderTopWidth: 2,
            borderTopColor: "#ddd",
            height: 70, // Adjust height
          }, */
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={"Categories"}
        component={CategoryScreen}
        options={{}}
        listeners={{
          tabPress: () => {
            // Disable drawer when navigating to TabProfileScreen
            navigation.setOptions({
              drawerLockMode: "locked-closed",
              gestureEnabled: false,
            });
          },
        }}
      ></Tab.Screen>
      <Tab.Screen name={"Setting"} component={SettingScreen}></Tab.Screen>
      <Tab.Screen name={"Profile"} component={MyProfile}></Tab.Screen>
      <Tab.Screen
        name={"Notifications"}
        component={NotificationsPage}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Home_Bottom_Tab;
