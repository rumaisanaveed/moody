import { APP_ROUTES } from "@/constants/Navigation";
import { Stack } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";
import React, { useEffect } from "react";

const AppLayout = () => {
  useEffect(() => {
    setStatusBarStyle("dark");
  }, []);

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
