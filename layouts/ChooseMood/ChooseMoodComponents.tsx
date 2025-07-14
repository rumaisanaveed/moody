import { Colors } from "@/constants/Colors";
import { emojis } from "@/constants/Data";
import { Regular } from "@/utilities/Fonts";
import { capitalizeTitle } from "@/utilities/Utils";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IEmojiList } from "./types";

export function EmojiList({ selectedEmojiId, handleSelectEmoji }: IEmojiList) {
  return (
    <View style={styles.emojiList}>
      {Object.entries(emojis).map(([text, emoji], index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleSelectEmoji(index)}
          activeOpacity={0.6}
        >
          <View
            style={[
              styles.emojiContainer,
              selectedEmojiId === index && {
                backgroundColor: Colors.WHITE,
              },
            ]}
            key={index}
          >
            <Text style={styles.emoji}>{emoji}</Text>
          </View>
          <Text style={styles.text}>{capitalizeTitle(text)}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  emojiList: {
    paddingTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  emojiContainer: {
    backgroundColor: "#D3DBEC",
    borderRadius: 50,
    padding: 15,
  },
  emoji: {
    fontSize: 40,
  },
  text: {
    paddingTop: 4,
    textAlign: "center",
    ...Regular(14, Colors.BLACK_LIGHT),
  },
});
