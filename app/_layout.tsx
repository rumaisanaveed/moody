import StartupWrapper from "@/components/startupWrapper/StartupWrapper";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { KeyboardProvider } from "react-native-keyboard-controller";
import "react-native-reanimated";

// TODO:
// Test the app on ios too
export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StartupWrapper>
        <KeyboardProvider>
          <ThemeProvider value={DefaultTheme}>
            <StatusBar style="dark" />
            <Slot />
          </ThemeProvider>
        </KeyboardProvider>
      </StartupWrapper>
    </QueryClientProvider>
  );
}
