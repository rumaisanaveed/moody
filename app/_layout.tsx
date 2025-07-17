import StartupWrapper from "@/components/startupWrapper/StartupWrapper";
import { Colors } from "@/constants/Colors";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import "react-native-reanimated";
import { Toaster } from "sonner-native";

// TODO:
// Test the app on ios too
export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <StartupWrapper>
          <KeyboardProvider>
            <ThemeProvider value={DefaultTheme}>
              <StatusBar style="dark" />
              <Slot />
              <Toaster
                position="top-center"
                closeButton
                richColors
                style={{
                  backgroundColor: Colors.WHITE,
                  borderColor: Colors.WHITE,
                }}
              />
            </ThemeProvider>
          </KeyboardProvider>
        </StartupWrapper>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
