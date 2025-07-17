import AppButton from "@/components/buttons/AppButton/AppButton";
import CustomLinearGradient from "@/components/CustomLinearGradient";
import SectionHeader from "@/components/SectionHeader";
import { Colors } from "@/constants/Colors";
import { EmojiList } from "@/layouts/ChooseMood/ChooseMoodComponents";
import useChooseMood from "@/layouts/ChooseMood/ChooseMoodContainer";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

const ChooseCurrentMood = () => {
  const { selectedEmojiId, handleSelectEmoji, handleClick } = useChooseMood();

  return (
    <CustomLinearGradient gradientColor={Colors.SKY_BLUE}>
      <SafeAreaView style={styles.flexOne}>
        <ScrollView style={styles.container}>
          <SectionHeader
            heading="What's your mood now?"
            text="Select mood that reflects the most how you are feeling at this moment."
            style={styles.mt20}
          />
          <EmojiList
            selectedEmojiId={selectedEmojiId}
            handleSelectEmoji={handleSelectEmoji}
          />
        </ScrollView>
        <AppButton
          title="Continue"
          disabled={selectedEmojiId === null}
          onPress={handleClick}
        />
      </SafeAreaView>
    </CustomLinearGradient>
  );
};

export default ChooseCurrentMood;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 10,
  },
  mt20: {
    marginTop: 20,
  },
});
