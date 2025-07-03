import AppButton from "@/components/buttons/AppButton/AppButton";
import CustomLinearGradient from "@/components/CustomLinearGradient";
import SectionHeader from "@/components/SectionHeader";
import { Colors } from "@/constants/Colors";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

const ChooseEmotions = () => {
  return (
    <CustomLinearGradient gradientColor={Colors.SKY_BLUE}>
      <SafeAreaView style={styles.flexOne}>
        <ScrollView>
          {/* TODO : the last selected mood will be displaying here */}
          <SectionHeader
            heading="Choose the emotions that make you feel neutral"
            text="Select at least 1 emotion"
          />
          {/* TODO : Add a button to add more emotions by yourself */}
          <AppButton title="Continue" />
        </ScrollView>
      </SafeAreaView>
    </CustomLinearGradient>
  );
};

export default ChooseEmotions;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});
