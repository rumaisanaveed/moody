import { CustomTabBarButton } from "@/components/buttons/CustomTabBarButton";
import { CustomTabBarComponent } from "@/components/buttons/CustomTabBarComponent";
import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs, useRouter } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";
import React, { useEffect } from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  const router = useRouter();

  useEffect(() => {
    setStatusBarStyle("dark");
  }, []);

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
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
          tabBarButton: (props) => <CustomTabBarComponent {...props} />,
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          tabBarIcon: ({ color }) => (
            <Ionicons name="stats-chart-outline" size={24} color={color} />
          ),
          tabBarButton: (props) => <CustomTabBarComponent {...props} />,
        }}
      />
      <Tabs.Screen
        name="modal"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <Ionicons name="add" size={28} color={Colors.WHITE} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              onPress={() => router.push("/(app)/(mood-track)/choose-mood")}
              {...props}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <Octicons name="history" size={24} color={color} />
          ),
          tabBarButton: (props) => <CustomTabBarComponent {...props} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
          tabBarButton: (props) => <CustomTabBarComponent {...props} />,
        }}
      />
    </Tabs>
  );
}
