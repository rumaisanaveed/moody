import AppButton from "@/components/buttons/AppButton/AppButton";
import CustomLinearGradient from "@/components/CustomLinearGradient";
import SectionHeader from "@/components/SectionHeader";
import { Colors } from "@/constants/Colors";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

const SelectHoursOfSleep = () => {
  return (
    <CustomLinearGradient gradientColor={Colors.SKY_BLUE}>
      <SafeAreaView style={styles.flex1}>
        <ScrollView style={styles.container}>
          <SectionHeader
            heading="How much was your sleep?"
            text="Sometimes, the reason of feeling low can be the inadequate sleep."
          />
        </ScrollView>
        <AppButton title="Continue" />
      </SafeAreaView>
    </CustomLinearGradient>
  );
};

export default SelectHoursOfSleep;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 10,
  },
});
