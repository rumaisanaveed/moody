import { Colors } from "@/constants/Colors";
import { Bold, Regular } from "@/utilities/Fonts";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ISectionHeader {
  heading: string;
  text: string;
}

const SectionHeader = ({ heading, text }: ISectionHeader) => {
  return (
    <View>
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
    ...Bold(24, Colors.BLACK_DARK),
  },
  text: {
    ...Regular(14, Colors.BLACK_LIGHT),
  },
});
