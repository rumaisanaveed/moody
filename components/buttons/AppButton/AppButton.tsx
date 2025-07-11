import { Colors } from "@/constants/Colors";
import { Regular } from "@/utilities/Fonts";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { TAppButton } from "./types";

const AppButton = ({
  title,
  onPress,
  disabled,
  marginHorizontal,
  style,
}: TAppButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.button,
        disabled && styles.disabledButton,
        {
          marginHorizontal:
            marginHorizontal !== undefined ? marginHorizontal : 20,
        },
        style,
      ]}
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
