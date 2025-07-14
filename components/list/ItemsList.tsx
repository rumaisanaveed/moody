import { Colors } from "@/constants/Colors";
import { emotions } from "@/constants/Data";
import { Regular, SemiBold } from "@/utilities/Fonts";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IListItemsProps {
  handleAddItem: (id: number, item: string) => void;
  title: string;
}

export function ItemsList({ handleAddItem, title }: IListItemsProps) {
  return (
    <View>
      <Text style={styles.heading}>All {title}</Text>
      <View style={styles.emotionsList}>
        {emotions.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.emotionContainer]}
            key={index}
            onPress={() => handleAddItem(index, item)}
          >
            <Text style={styles.emotionText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    paddingTop: 10,
    ...SemiBold(16, Colors.BLACK_DARK),
  },
  emotionsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
    gap: 10,
  },
  emotionContainer: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.BLACK_LIGHT,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  emotionText: {
    textAlign: "center",
    ...Regular(14, Colors.BLACK_DARK),
  },
});
