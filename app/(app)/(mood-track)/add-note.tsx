import CustomLinearGradient from "@/components/CustomLinearGradient";
import SectionHeader from "@/components/SectionHeader";
import { Colors } from "@/constants/Colors";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

const AddNote = () => {
  return (
    <CustomLinearGradient gradientColor={Colors.SKY_BLUE}>
      <SafeAreaView>
        <ScrollView>
          <SectionHeader
            heading="Any thing you want to add"
            text="Add your notes on any thought that reflating your mood"
          />
        </ScrollView>
      </SafeAreaView>
    </CustomLinearGradient>
  );
};

export default AddNote;
