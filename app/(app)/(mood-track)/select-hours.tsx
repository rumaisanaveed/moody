import AppButton from "@/components/buttons/AppButton/AppButton";
import CustomLinearGradient from "@/components/CustomLinearGradient";
import RadioGroup from "@/components/input/RadioGroup/RadioGroup";
import { useRadioGroup } from "@/components/input/RadioGroup/RadioGroupContainer";
import SectionHeader from "@/components/SectionHeader";
import { Colors } from "@/constants/Colors";
import { sleepHoursOptions } from "@/constants/Data";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

const SelectHoursOfSleep = () => {
  const { selected, setSelected, handleClick } = useRadioGroup();

  return (
    <CustomLinearGradient gradientColor={Colors.SKY_BLUE}>
      <SafeAreaView style={styles.flex1}>
        <ScrollView style={styles.container}>
          <SectionHeader
            heading="How much was your sleep?"
            text="Sometimes, the reason of feeling low can be the inadequate sleep."
          />
          <RadioGroup
            options={sleepHoursOptions}
            selected={selected}
            onSelect={setSelected}
          />
        </ScrollView>
        <AppButton
          title="Continue"
          disabled={selected === null}
          onPress={handleClick}
        />
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
