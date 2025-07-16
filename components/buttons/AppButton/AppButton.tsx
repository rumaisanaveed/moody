import { Colors } from "@/constants/Colors";
import { Regular } from "@/utilities/Fonts";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { TAppButton } from "./types";

const AppButton = ({
  title,
  onPress,
  disabled,
  marginHorizontal,
  isPending,
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
      {!isPending && <Text style={styles.title}>{title}</Text>}
      {isPending && <ActivityIndicator size="small" color={Colors.WHITE} />}
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
