import AppButton from "@/components/buttons/AppButton/AppButton";
import CustomLinearGradient from "@/components/CustomLinearGradient";
import SectionHeader from "@/components/SectionHeader";
import { Colors } from "@/constants/Colors";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

const SelectHoursOfSleep = () => {
  return (
    <CustomLinearGradient gradientColor={Colors.SKY_BLUE}>
      <SafeAreaView>
        <ScrollView>
          <SectionHeader
            heading="How much was your sleep?"
            text="Sometimes, the reason of feeling low can be the inadequate sleep. Tell us how many hours you slept so that we can make your day better."
          />
          <AppButton title="Continue" />
        </ScrollView>
      </SafeAreaView>
    </CustomLinearGradient>
  );
};

export default SelectHoursOfSleep;
