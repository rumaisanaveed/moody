import { CustomTabBarButton } from "@/components/buttons/CustomTabBarButton";
import { CustomTabBarComponent } from "@/components/buttons/CustomTabBarComponent";
import { defaultHeader } from "@/components/navigationHelpers/Headers";
import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

// TODO : Fix tab bar height coz it's taking more
// height on some screens and less height on some screens
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.BLACK_LIGHT,
        tabBarInactiveTintColor: Colors.BLACK,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: Colors.WHITE,
            borderTopWidth: 0,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
          },
          default: {
            backgroundColor: Colors.WHITE,
            opacity: 0.85,
            borderTopWidth: 0,
            borderTopColor: "transparent",
            elevation: 0,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
          tabBarButton: (props) => <CustomTabBarComponent {...props} />,
          ...defaultHeader({ route, title: "home", showHeaderTitle: false }),
        })}
      />
      <Tabs.Screen
        name="stats"
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <Ionicons name="stats-chart-outline" size={24} color={color} />
          ),
          tabBarButton: (props) => <CustomTabBarComponent {...props} />,
          ...defaultHeader({
            route,
            title: "Stats",
            headerTitle: "Your Stats",
          }),
        })}
      />
      <Tabs.Screen
        name="modal"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <Ionicons name="add" size={28} color={Colors.WHITE} />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <Octicons name="history" size={24} color={color} />
          ),
          tabBarButton: (props) => <CustomTabBarComponent {...props} />,
          ...defaultHeader({
            route,
            headerTitle: "Your Mood History",
            title: "History",
          }),
        })}
      />
      <Tabs.Screen
        name="settings"
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
          tabBarButton: (props) => <CustomTabBarComponent {...props} />,
          ...defaultHeader({ route, title: "Settings" }),
        })}
      />
    </Tabs>
  );
}
