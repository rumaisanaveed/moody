import { Colors } from "@/constants/Colors";
import { emojis, weekData } from "@/constants/Data";
import { DayItemProps } from "@/types/tabs/Home";
import { Bold, Regular } from "@/utilities/Fonts";
import { getCurrentDay } from "@/utilities/Utils";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

// TODO : Make a generic component for flatlist
// fix this flatlist height issue
interface IRenderItemProps {
  item: DayItemProps;
  index: number;
}

const MoodsFlatlist = () => {
  const emojisList = Object.values(emojis);
  // emoji list
  const emojisNewList = [...emojisList, "😔", "😔"];
  const currentDayName = getCurrentDay();

  return (
   <View>
     <FlatList
      data={weekData ?? []}
      horizontal
      style={styles.pb10}
      contentContainerStyle={styles.daysList}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }: IRenderItemProps) => {
        const isCurrentDay =
          item.name.toLowerCase() === currentDayName.toLowerCase();
        return (
          <View
            style={styles.dayAndEmojiContainer}
          >
            <View
              style={[styles.dayItem, isCurrentDay && styles.currentDayItem]}
            >
              <Text style={isCurrentDay && styles.currentDayText}>
                {item.name.slice(0, 3)}
              </Text>
              <Text
                style={[styles.dayNo, isCurrentDay && styles.currentDayText]}
              >
                {item.id + 1}
              </Text>
            </View>
            <View
              style={[
                styles.emojiContainer,
                isCurrentDay && styles.selectedEmojiContainer,
              ]}
            >
              <Text style={styles.emoji}>{emojisNewList[index]}</Text>
            </View>
          </View>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
    />
   </View>
  );
};

export default MoodsFlatlist;

const styles = StyleSheet.create({
  pb10 : {
    paddingBottom : 10,
  },
  daysList: {
    gap: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexGrow: 0,
  },
  dayAndEmojiContainer: {
    alignItems: "center",
  },
  dayItem: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 7,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  dayNo: {
    ...Bold(20, Colors.BLACK_DARK),
  },
  currentDayItem: {
    backgroundColor: Colors.PURPLE,
  },
  currentDayText: {
    ...Regular(14, Colors.WHITE),
  },
  emojiContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  emoji: {
    fontSize: 25,
  },
  selectedEmojiContainer: {
    backgroundColor: Colors.PURPLE,
  },
});
