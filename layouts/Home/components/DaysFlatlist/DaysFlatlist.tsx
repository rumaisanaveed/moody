import FlatListHandler from "@/components/flatListHandler/FlatListHandler";
import { weekData } from "@/constants/Data";
import React from "react";
import { StyleSheet, View } from "react-native";
import DayAndMoodItem from "./DaysFlatlistComponents";

interface FlatListProps {
  data: any[];
}

export default function DaysFlatlist({ data }: FlatListProps) {
  // TODO : Fix the height issue by removing the view from the wrapper
  return (
    <View>
      <FlatListHandler
        data={weekData ?? []}
        horizontal
        style={styles.container}
        contentContainerStyle={styles.daysList}
        renderItem={({ item, index }) => (
          <DayAndMoodItem item={item} index={index} emojisList={data} />
        )}
        keyExtractor={(item) => item.id.toString()}
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
