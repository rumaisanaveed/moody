import { Colors } from "@/constants/Colors";
import { Bold, Regular } from "@/utilities/Fonts";
import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

interface ISectionHeader {
  heading: string;
  text: string;
  style?: StyleProp<ViewStyle>;
}

const SectionHeader = ({ heading, text, style }: ISectionHeader) => {
  return (
    <View style={style}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },
  heading: {
    textAlign: "center",
    ...Bold(32, Colors.BLACK_DARK),
  },
  text: {
    textAlign: "center",
    ...Regular(16, Colors.BLACK_LIGHT),
  },
});
