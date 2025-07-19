import { Colors } from "@/constants/Colors";
import { Bold, Regular } from "@/utilities/Fonts";
import { formatDayLabel, getCurrentDay } from "@/utilities/Utils";
import { StyleSheet, Text, View } from "react-native";

interface IRenderItemProps {
  item: string;
  index: number;
  mood?: string;
}

export default function DayAndMoodItem({
  item,
  index,
  mood,
}: IRenderItemProps) {
  const currentDayName = getCurrentDay();
  const isCurrentDay = item.toLowerCase() === currentDayName.toLowerCase();
  return (
    <View style={styles.dayAndEmojiContainer} key={index}>
      <View style={[styles.dayItem, isCurrentDay && styles.currentDayItem]}>
        <Text style={isCurrentDay && styles.currentDayText}>
          {formatDayLabel(item)}
        </Text>
        <Text style={[styles.dayNo, isCurrentDay && styles.currentDayText]}>
          {index + 1}
        </Text>
      </View>
      {mood && (
        <View
          style={[
            styles.emojiContainer,
            isCurrentDay && styles.selectedEmojiContainer,
          ]}
        >
          <Text style={styles.emoji}>{mood}</Text>
        </View>
      )}
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
    width: 70,
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
