import { FontVariations } from "@/utilities/Fonts";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { KeyboardProvider } from "react-native-keyboard-controller";
import "react-native-reanimated";

// TODO:
// Add animations as well
// Test the app on ios too
export default function RootLayout() {
  const [loaded] = useFonts(FontVariations);

  if (!loaded) {
    return;
  }

  return (
    <KeyboardProvider>
      <ThemeProvider value={DefaultTheme}>
        <Slot />
        <StatusBar style="auto" />
      </ThemeProvider>
    </KeyboardProvider>
  );
}
