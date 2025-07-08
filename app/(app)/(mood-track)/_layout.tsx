import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";

const MoodTrackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.SKY_BLUE,
        },
        headerTitle: "",
        headerShadowVisible: false,
        headerBackButtonDisplayMode: "generic",
        headerTintColor: Colors.BLACK_LIGHT,
      }}
    >
      <Stack.Screen
        name="choose-mood"
        options={{
          // headerBackVisible: false,
          // headerLeft: () => <ShowDateAndDay />,
          headerShown: false,
        }}
      />
      <Stack.Screen name="choose-emotions" />
      <Stack.Screen name="choose-reasons" />
      <Stack.Screen name="select-hours" />
    </Stack>
  );
};

export default MoodTrackLayout;
