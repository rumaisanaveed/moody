import { Colors } from "@/constants/Colors";
import { Bold, Regular } from "@/utilities/Fonts";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ProfileIcon = () => {
  return (
    <View style={styles.profile}>
      <Text style={styles.avatar}>R</Text>
    </View>
  );
};

export const HeaderLeft = () => {
  return (
    <Text style={styles.greeting}>
      Hey, <Text style={styles.bold}>Alexa!</Text> 👋
    </Text>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: {
    height: 40,
    width: 40,
    backgroundColor: Colors.WHITE,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation : 10,
  },
  avatar: {
    textAlign: "center",
    ...Bold(18, Colors.BLACK_LIGHT),
  },
  greeting: {
    marginBottom: 8,
    ...Regular(24, Colors.BLACK_DARK),
  },
  bold: {
    fontWeight: "bold",
  },
});
