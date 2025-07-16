import { Colors } from "@/constants/Colors";
import { Bold } from "@/utilities/Fonts";
import { setStatusBarTranslucent, StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const SplashScreen = () => {
  useEffect(() => {
    setStatusBarTranslucent(true);
    return () => {
      setStatusBarTranslucent(true);
    };
  }, []);

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.container}>
      <StatusBar style="dark" />
      <Image
        source={require("../../assets/icons/logo.png")}
        style={styles.logo}
      />
      <ActivityIndicator color={Colors.BLACK_DARK} size="large" />
    </Animated.View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.LIGHT_WHITE,
  },
  logoContainer: {
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    paddingBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoText: {
    ...Bold(70, Colors.BLACK_DARK),
  },
  indicator: {},
});
