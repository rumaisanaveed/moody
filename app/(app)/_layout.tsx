import { APP_ROUTES } from "@/constants/Navigation";
import { Stack } from "expo-router";
import React from "react";

const AppLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={APP_ROUTES.TABS} />
      <Stack.Screen name={APP_ROUTES.MOOD_TRACK_STACK} />
    </Stack>
  );
};

export default AppLayout;
