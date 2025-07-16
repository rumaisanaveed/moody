import { Colors } from "@/constants/Colors";
import { Bold, Regular } from "@/utilities/Fonts";
import { getUserDetails } from "@/utilities/Utils";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ProfileIcon = () => {
  const user = getUserDetails();
  return (
    <View style={styles.profile}>
      <Text style={styles.avatar}>{user?.username[0].toUpperCase()}</Text>
    </View>
  );
};

export const HeaderLeft = () => {
  const user = getUserDetails();
  return (
    <Text style={styles.greeting}>
      Hey, <Text style={styles.bold}>{user?.username}!</Text> 👋
    </Text>
  );
};

const styles = StyleSheet.create({
  profile: {
    height: 40,
    width: 40,
    backgroundColor: Colors.WHITE,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
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
