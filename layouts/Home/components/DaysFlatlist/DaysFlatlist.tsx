import FlatListHandler from "@/components/flatListHandler/FlatListHandler";
import { IMoodProps } from "@/components/moods/types";
import { weekDays } from "@/constants/Data";
import React from "react";
import { StyleSheet, View } from "react-native";
import DayAndMoodItem from "./DaysFlatlistComponents";

interface FlatListProps {
  moods: IMoodProps[];
  currentDayIndex: number;
}

export default function DaysFlatlist({
  moods,
  currentDayIndex,
}: FlatListProps) {
  return (
    <View>
      <FlatListHandler
        data={weekDays ?? []}
        horizontal
        style={styles.container}
        contentContainerStyle={styles.daysList}
        renderItem={({ item, index }) => {
          const moodObj = moods.find(
            (mood) => mood.day.toLowerCase() === item.toLowerCase()
          );
          return (
            <DayAndMoodItem item={item} index={index} mood={moodObj?.mood} />
          );
        }}
        // initialScrollIndex={currentDayIndex}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  daysList: {
    gap: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexGrow: 0,
  },
});
