import { Colors } from "@/constants/Colors";
import { Bold, Regular } from "@/utilities/Fonts";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// TOOD : Handle data and login inside the container later
const Header = () => {
  return (
    <View style={styles.row}>
      <Text style={styles.greeting}>
        Hey, <Text style={styles.bold}>Alexa!</Text> 👋
      </Text>
      <View style={styles.profile}>
        <Text style={styles.avatar}>R</Text>
      </View>
    </View>
  );
};

export default Header;

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
  },
  avatar: {
    textAlign: "center",
    ...Bold(18, Colors.BLACK_DARK),
  },
  greeting: {
    marginBottom: 8,
    ...Regular(24, Colors.BLACK_DARK),
  },
  bold: {
    fontWeight: "bold",
  },
});
