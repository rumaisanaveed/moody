import AppButton from "@/components/buttons/AppButton/AppButton";
import CustomLinearGradient from "@/components/CustomLinearGradient";
import SectionHeader from "@/components/SectionHeader";
import { Colors } from "@/constants/Colors";
import { EmojiList } from "@/layouts/ChooseMood/ChooseMoodComponents";
import useChooseMood from "@/layouts/ChooseMood/ChooseMoodContainer";
import { Regular } from "@/utilities/Fonts";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

const ChooseCurrentMood = () => {
  const router = useRouter();
  const { selectedEmojiId, handleSelectEmoji } = useChooseMood();

  return (
    <CustomLinearGradient gradientColor={Colors.SKY_BLUE}>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView style={styles.container}>
          <SectionHeader
            heading="What's your mood now?"
            text="Select mood that reflects the most how you are feeling at this moment."
            style={{
              marginTop: 20,
            }}
          />
          {/* emojis */}
          <EmojiList
            selectedEmojiId={selectedEmojiId}
            handleSelectEmoji={handleSelectEmoji}
          />
        </ScrollView>
        <AppButton
          title="Continue"
          disabled={selectedEmojiId === null}
          onPress={() => router.push("/(app)/(mood-track)/choose-emotions")}
        />
      </SafeAreaView>
    </CustomLinearGradient>
  );
};

export default ChooseCurrentMood;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
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
