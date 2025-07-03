import { Colors } from "@/constants/Colors";
import { Regular } from "@/utilities/Fonts";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { IAppButton } from "./types";

const AppButton = ({ title, disabled }: IAppButton) => {
  // TODO : add more props later
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.PURPLE,
  },
  title: {
    ...Regular(14, Colors.WHITE),
  },
});
