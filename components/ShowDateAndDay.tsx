import { Colors } from "@/constants/Colors";
import { Regular } from "@/utilities/Fonts";
import { getCurrentDateAndDay } from "@/utilities/Utils";
import Fontisto from "@expo/vector-icons/Fontisto";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShowDateAndDay = () => {
  const currentDayAndDate = getCurrentDateAndDay();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{currentDayAndDate}</Text>
      <Fontisto name="date" size={15} color={Colors.PURPLE} />
    </View>
  );
};

export default ShowDateAndDay;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  text: {
    lineHeight: 20,
    ...Regular(18, Colors.PURPLE),
  },
});
