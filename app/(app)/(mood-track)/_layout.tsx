import { defaultHeader } from "@/components/navigationHelpers/Headers";
import { MOOD_TRACK_ROUTES } from "@/constants/Navigation";
import { Stack } from "expo-router";
import React from "react";

const MoodTrackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={MOOD_TRACK_ROUTES.CHOOSE_MOODS}
        options={({ route }) => defaultHeader({ route, showBackIcon: true })}
      />
      <Stack.Screen
        name={MOOD_TRACK_ROUTES.CHOOSE_EMOTIONS}
        options={({ route }) => defaultHeader({ route, showBackIcon: true })}
      />
      <Stack.Screen
        name={MOOD_TRACK_ROUTES.CHOOSE_REASONS}
        options={({ route }) => defaultHeader({ route, showBackIcon: true })}
      />
      <Stack.Screen
        name={MOOD_TRACK_ROUTES.SELECT_HOURS}
        options={({ route }) => defaultHeader({ route, showBackIcon: true })}
      />
      <Stack.Screen
        name={MOOD_TRACK_ROUTES.ADD_NOTE}
        options={({ route }) => defaultHeader({ route, showBackIcon: true })}
      />
    </Stack>
  );
};

export default MoodTrackLayout;
