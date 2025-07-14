import CustomLinearGradient from "@/components/CustomLinearGradient";
import MoodCards from "@/components/moods/MoodCards";
import { Colors } from "@/constants/Colors";
import { emojis } from "@/constants/Data";
import DaysFlatlist from "@/layouts/Home/components/DaysFlatlist/DaysFlatlist";
import { HeaderLeft, ProfileIcon } from "@/layouts/Home/components/Header";
import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function Home() {
  const navigation = useNavigation<any>();
  const emojisList = Object.values(emojis);
  const emojisNewList = [...emojisList, "😔", "😔"];

  // TODO: Header sometimes not visible
  useEffect(() => {
    navigation.setParams({
      RightComponent: ProfileIcon,
      LeftComponent: HeaderLeft,
    });
  }, [navigation]);

  return (
    <CustomLinearGradient gradientColor={Colors.VIOLET}>
      <SafeAreaView style={styles.flexOne}>
        <View style={[styles.container, styles.flexOne]}>
          <DaysFlatlist data={emojisNewList} />
          <MoodCards heading="This Week's Mood Journal" />
        </View>
      </SafeAreaView>
    </CustomLinearGradient>
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 10,
  },
  content: {
    padding: 16,
  },
});
