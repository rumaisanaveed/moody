import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomMoodBar = ({
  value,
  color,
  emoji,
}: {
  value: number;
  color: string;
  emoji: string;
}) => {
  return (
    <View style={styles.wrapper}>
      {/* White cap */}
      <View style={styles.cap} />

      {/* Bar body with emoji inside */}
      <View
        style={[
          styles.bar,
          {
            height: value * 2, // scale factor for visibility
            backgroundColor: color,
          },
        ]}
      >
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 4,
  },
  cap: {
    height: 10,
    width: 25,
    backgroundColor: "white",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginBottom: 2,
  },
  bar: {
    width: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 4,
  },
  emoji: {
    fontSize: 20,
  },
});

export default CustomMoodBar;
