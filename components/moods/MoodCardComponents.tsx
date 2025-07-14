import { Colors } from "@/constants/Colors";
import { Bold, Regular, SemiBold } from "@/utilities/Fonts";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CardItem {
  mood: any;
  moodName: string;
  tipHeading: string;
  tipText: string;
  moodText: string;
  reason: string;
  noteText: string;
}

interface CardItemProps {
  index: number;
  item: CardItem;
}

export default function MoodCardItem({ item, index }: CardItemProps) {
  return (
    <View style={styles.card} key={index}>
      {/* mood & notes */}
      <View style={[styles.gap10, styles.borderBottom]}>
        <View style={styles.row}>
          <View style={styles.rowGap1}>
            <Text style={styles.mood}>{item.mood}</Text>
            <Text style={styles.moodName}>{item.moodName}</Text>
          </View>
        </View>
        <View style={styles.gap10}>
          <View>
            <Text style={styles.moodText}>
              You felt&nbsp;
              <Text style={styles.moodTextDark}>{item.moodText}</Text>
            </Text>
            <Text style={styles.moodText}>{item.tipText}</Text>
          </View>
          <View>
            <Text style={styles.noteText}>
              <Text style={styles.note}>Note:</Text>
              &nbsp; {item.noteText}
            </Text>
            <TouchableOpacity activeOpacity={0.6}>
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
          </View>
        </View>
      </View>
      {/* tip of the day */}
      <View style={[styles.gap10, styles.p10]}>
        <View style={styles.row}>
          <Text style={styles.tipHeading}>Find Peace</Text>
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
        <Text style={styles.tipText}>
          Spend time outdoors, surrounded by greenery and fresh air.
        </Text>
      </View>
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
