import CustomLinearGradient from "@/components/CustomLinearGradient";
import MoodCards from "@/components/moods/MoodCards";
import { Colors } from "@/constants/Colors";
import Header from "@/layouts/Home/components/Header";
import MoodsFlatlist from "@/layouts/Home/components/MoodsFlatlist";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function Home() {
  return (
    <CustomLinearGradient gradientColor={Colors.VIOLET}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Header />
          <MoodsFlatlist />
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
});
