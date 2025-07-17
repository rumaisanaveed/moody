import AppButton from "@/components/buttons/AppButton/AppButton";
import CustomLinearGradient from "@/components/CustomLinearGradient";
import AppInput from "@/components/input/AppInput/AppInput";
import SectionHeader from "@/components/SectionHeader";
import { Colors } from "@/constants/Colors";
import { useAddNote } from "@/layouts/AddNote/AddNoteContainer";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

const AddNote = () => {
  const { control, handleSubmit, isPending } = useAddNote();

  return (
    <CustomLinearGradient gradientColor={Colors.SKY_BLUE}>
      <SafeAreaView style={styles.flex1}>
        <ScrollView style={styles.container}>
          <SectionHeader
            heading="Any thing you want to add"
            text="Add your notes on any thought that reflating your mood"
          />
          <AppInput
            name="note"
            label="Add Notes"
            multiline
            numberOfLines={10}
            placeholder="Today, I felt sad because of the university fyp submission."
            control={control}
          />
        </ScrollView>
        <AppButton title="Save" onPress={handleSubmit} isPending={isPending} />
      </SafeAreaView>
    </CustomLinearGradient>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 15,
  },
});
