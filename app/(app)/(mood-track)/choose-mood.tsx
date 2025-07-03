import AppButton from "@/components/buttons/AppButton/AppButton";
import CustomLinearGradient from "@/components/CustomLinearGradient";
import SectionHeader from "@/components/SectionHeader";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

const ChooseCurrentMood = () => {
  return (
    <CustomLinearGradient>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <SectionHeader
            heading="What's your mood now?"
            text="Select mood that reflects the most how you are feeling at this moment."
          />
          <AppButton title="Continue" />
        </ScrollView>
      </SafeAreaView>
    </CustomLinearGradient>
  );
};

export default ChooseCurrentMood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
