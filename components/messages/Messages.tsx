import { Colors } from "@/constants/Colors";
import { Regular } from "@/utilities/Fonts";
import React from "react";
import { StyleSheet, Text } from "react-native";

export default function ShowErrorMessage({ message }: { message: string }) {
  return <Text style={styles.error}>{message}</Text>;
}

const styles = StyleSheet.create({
  error: {
    paddingTop: 10,
    ...Regular(14, Colors.RED),
  },
});
