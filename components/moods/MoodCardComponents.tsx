import { IMoodEntry } from "@/apis/Mood/types";
import { Colors } from "@/constants/Colors";
import { Bold, Regular, SemiBold } from "@/utilities/Fonts";
import {
  getArrayAsCommaSeparatedString,
  truncateText,
} from "@/utilities/Utils";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CardItemProps {
  index: number;
  item: IMoodEntry;
  toggleNoteVisibility: () => void;
  isCompleteNoteVisible: boolean;
}

export default function MoodCardItem({
  item,
  index,
  toggleNoteVisibility,
  isCompleteNoteVisible,
}: CardItemProps) {
  const shouldDisplayQuote =
    item.quote.heading !== "" && item.quote.quote !== "";
  return (
    <View style={styles.card} key={index}>
      {/* mood & notes */}
      <View style={[styles.gap10, shouldDisplayQuote && styles.borderBottom]}>
        <View style={styles.row}>
          <View style={styles.rowGap1}>
            <Text style={styles.mood}>{item.mood}</Text>
            <Text style={styles.moodName}>{item.moodText}</Text>
          </View>
          <Text style={styles.day}>{item.dayOfWeek}</Text>
        </View>
        <View style={styles.gap10}>
          <View>
            <Text style={styles.moodText}>
              You felt&nbsp;
              <Text style={styles.moodTextDark}>
                {getArrayAsCommaSeparatedString(item.emotions)}
              </Text>
            </Text>
            <Text style={styles.moodText}>
              Because of&nbsp;
              <Text style={styles.moodTextDark}>
                {getArrayAsCommaSeparatedString(item.reasons)}
              </Text>
            </Text>
            <Text style={styles.moodText}>
              You had&nbsp;
              <Text style={styles.moodTextDark}>
                {item.sleepHours} hours&nbsp;
              </Text>
              of sleep.
            </Text>
          </View>
          <View>
            <Text style={styles.noteText}>
              <Text style={styles.note}>Note:</Text>
              &nbsp;
              {isCompleteNoteVisible ? item.note : truncateText(item.note)}
            </Text>
            {item.note.length > 70 && (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={toggleNoteVisibility}
              >
                <View style={styles.readMoreButton}>
                  <FontAwesome6
                    name="add"
                    size={16}
                    color={Colors.PURPLE}
                    style={{
                      lineHeight: 24,
                      paddingTop: 1,
                    }}
                  />
                  <Text style={styles.readMoreText}>Read More</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      {/* tip of the day */}
      {shouldDisplayQuote && (
        <View style={[styles.gap10, styles.p10]}>
          <View style={styles.row}>
            <Text style={styles.tipHeading}>{item.quote.heading}</Text>
            <View style={styles.rowGap1}>
              <Entypo
                name="light-bulb"
                size={18}
                color={Colors.GOLDEN}
                style={{ lineHeight: 24 }}
              />
              <Text style={styles.tipButtonText}>Tip</Text>
            </View>
          </View>
          <Text style={styles.tipText}>{item.quote.quote}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    backgroundColor: Colors.WHITE,
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: Colors.SHADOW_COLOR,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  gap10: {
    gap: 10,
  },
  rowGap1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  borderBottom: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  mood: {
    fontSize: 20,
    lineHeight: 24,
  },
  moodName: {
    lineHeight: 24,
    ...Bold(20, Colors.BLACK_DARK),
  },
  day: {
    ...Regular(16, Colors.BLACK_DARK),
  },
  moodText: {
    ...Regular(16, Colors.BLACK_DARK),
  },
  moodTextDark: {
    ...Bold(16, Colors.BLACK_DARK),
  },
  editButtonText: {
    ...Regular(16, Colors.PURPLE),
  },
  noteText: {
    ...Regular(15, Colors.BLACK_DARK),
  },
  note: {
    ...SemiBold(15, Colors.BLACK_DARK),
  },
  readMoreButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 8,
    marginBottom: 5,
  },
  p10: {
    paddingTop: 10,
  },
  readMoreText: {
    lineHeight: 24,
    ...Regular(16, Colors.PURPLE),
  },
  tipHeading: {
    ...Bold(20, Colors.BLACK_DARK),
  },
  tipButtonText: {
    lineHeight: 24,
    ...Regular(16, Colors.GOLDEN),
  },
  tipText: {
    ...Regular(16, Colors.BLACK_DARK),
  },
});
