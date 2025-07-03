import CustomLinearGradient from "@/components/CustomLinearGradient";
import MoodCards from "@/components/moods/MoodCards";
import { Colors } from "@/constants/Colors";
import { emojis, weekData } from "@/constants/Data";
import { DayItemProps } from "@/types/tabs/Home";
import { Bold, Regular } from "@/utilities/Fonts";
import { getCurrentDay } from "@/utilities/Utils";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Home() {
  const emojisList = Object.values(emojis);
  // emoji list
  const emojisNewList = [...emojisList, "😔", "😔"];
  const currentDayName = getCurrentDay();

  return (
    <CustomLinearGradient gradientColor={Colors.VIOLET}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* header */}
          <View style={styles.row}>
            <Text style={styles.greeting}>
              Hey, <Text style={styles.bold}>Alexa!</Text> 👋
            </Text>

            {/* profile container */}
            <View style={styles.profile}>
              <Text style={styles.avatar}>R</Text>
            </View>
          </View>

          {/* 7 days mood */}
          <FlatList
            data={weekData ?? []}
            horizontal
            style={{
              paddingTop: 15,
              paddingBottom: 10,
            }}
            contentContainerStyle={styles.daysList}
            showsHorizontalScrollIndicator={false}
            renderItem={({
              item,
              index,
            }: {
              item: DayItemProps;
              index: number;
            }) => {
              const isCurrentDay =
                item.name.toLowerCase() === currentDayName.toLowerCase();
              return (
                <View style={styles.dayAndEmojiContainer}>
                  <View
                    style={[
                      styles.dayItem,
                      isCurrentDay && styles.currentDayItem,
                    ]}
                  >
                    <Text style={isCurrentDay && styles.currentDayText}>
                      {item.name.slice(0, 3)}
                    </Text>
                    <Text
                      style={[
                        styles.dayNo,
                        isCurrentDay && styles.currentDayText,
                      ]}
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

          {/* Cards */}
          <MoodCards heading="This Week's Mood Journal" />
        </ScrollView>
      </SafeAreaView>
    </CustomLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: {
    height: 40,
    width: 40,
    backgroundColor: Colors.WHITE,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    textAlign: "center",
    ...Bold(18, Colors.BLACK_DARK),
  },
  greeting: {
    marginBottom: 8,
    ...Regular(24, Colors.BLACK_DARK),
  },
  bold: {
    fontWeight: "bold",
  },
  daysList: {
    gap: 10,
  },
  dayAndEmojiContainer: {
    alignItems: "center",
    justifyContent: "center",
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
