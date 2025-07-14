import { Colors } from "@/constants/Colors";
import { DayItemProps } from "@/types/tabs/Home";
import { Bold, Regular } from "@/utilities/Fonts";
import { getCurrentDay } from "@/utilities/Utils";
import { StyleSheet, Text, View } from "react-native";

interface IRenderItemProps {
  item: DayItemProps;
  index: number;
  emojisList: any[];
}

export default function DayAndMoodItem({
  item,
  index,
  emojisList,
}: IRenderItemProps) {
  const currentDayName = getCurrentDay();
  const isCurrentDay = item.name.toLowerCase() === currentDayName.toLowerCase();
  return (
    <View style={styles.dayAndEmojiContainer}>
      <View style={[styles.dayItem, isCurrentDay && styles.currentDayItem]}>
        <Text style={isCurrentDay && styles.currentDayText}>
          {item.name.slice(0, 3)}
        </Text>
        <Text style={[styles.dayNo, isCurrentDay && styles.currentDayText]}>
          {item.id + 1}
        </Text>
      </View>
      <View
        style={[
          styles.emojiContainer,
          isCurrentDay && styles.selectedEmojiContainer,
        ]}
      >
        <Text style={styles.emoji}>{emojisList[index]}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
