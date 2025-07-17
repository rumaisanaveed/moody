import MoodCards from "@/components/moods/MoodCards";
import React from "react";
import { StyleSheet, View } from "react-native";

const History = () => {
  return (
    <View style={styles.container}>
      <MoodCards hideHeading={true} />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
