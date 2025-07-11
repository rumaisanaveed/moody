import React from "react";
import { StyleSheet, Text, View } from "react-native";

// TODO: Design this screen

const Settings = () => {
  return (
    <View>
      <Text style={[styles.heading]}>Settings Screen</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
