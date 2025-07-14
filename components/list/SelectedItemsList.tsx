import { Colors } from "@/constants/Colors";
import { ISelectedItem } from "@/types/List";
import { Regular } from "@/utilities/Fonts";
import Entypo from "@expo/vector-icons/Entypo";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ISelectedItemsProps {
  selectedItems: ISelectedItem[];
  handleClearItems: () => void;
  handleClearItem: (id: number) => void;
}

export function SelectedItemsList({
  selectedItems,
  handleClearItem,
  handleClearItems,
}: ISelectedItemsProps) {
  return (
    <View>
      {selectedItems.length > 0 && (
        <View style={styles.row}>
          <Text style={styles.text}>Selected({selectedItems.length})</Text>
          <TouchableOpacity onPress={handleClearItems}>
            <Text style={styles.text}>Clear all</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={[styles.emotionsList, styles.gap5]}>
        {selectedItems?.map((item: ISelectedItem) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item.id}
            style={styles.selectedItem}
            onPress={() => handleClearItem(item.id)}
          >
            <Text
              style={[
                styles.selectedItemText,
                {
                  lineHeight: 18,
                },
              ]}
            >
              {item.name}
            </Text>
            <Entypo name="cross" size={14} color={Colors.BLACK_LIGHT} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
  },
  text: {
    ...Regular(14, Colors.BLACK_DARK),
  },
  gap5: {
    gap: 5,
  },
  emotionsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
    gap: 10,
  },
  selectedItem: {
    backgroundColor: Colors.WHITE,
    borderRadius: 50,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  selectedItemText: {
    ...Regular(14, Colors.BLACK_DARK),
  },
});
