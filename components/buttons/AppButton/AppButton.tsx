import { Colors } from "@/constants/Colors";
import { Regular } from "@/utilities/Fonts";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { TAppButton } from "./types";

const AppButton = ({ title, onPress, disabled }: TAppButton) => {
  // TODO : add more props later
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    borderRadius: 50,
    paddingVertical: 15,
    backgroundColor: Colors.PURPLE,
    marginHorizontal: 20,
  },
  title: {
    textAlign: "center",
    ...Regular(16, Colors.WHITE),
  },
  disabledButton: {
    backgroundColor: Colors.GRAY, // or any muted color
    opacity: 0.5,
  },
});
