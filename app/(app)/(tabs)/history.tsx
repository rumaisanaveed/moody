import MoodCards from "@/components/moods/MoodCards";
import React from "react";
import { StyleSheet, View } from "react-native";

const History = () => {
  return (
    <View style={styles.container}>
      <MoodCards heading="Your Mood History" />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
