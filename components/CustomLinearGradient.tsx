import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

interface Props {
  children: React.ReactNode;
  gradientColor?: string;
}

const CustomLinearGradient = ({ children, gradientColor }: Props) => {
  return (
    <LinearGradient
      colors={[gradientColor ? gradientColor : Colors.SKY_BLUE, Colors.WHITE]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

export default CustomLinearGradient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 5,
  },
});
