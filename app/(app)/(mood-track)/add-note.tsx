import AppButton from "@/components/buttons/AppButton/AppButton";
import CustomLinearGradient from "@/components/CustomLinearGradient";
import AppInput from "@/components/input/AppInput";
import SectionHeader from "@/components/SectionHeader";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

const AddNote = () => {
  const [note, setNote] = useState<string>("");
  const router = useRouter();

  return (
    <CustomLinearGradient gradientColor={Colors.SKY_BLUE}>
      <SafeAreaView style={styles.flex1}>
        <ScrollView style={styles.container}>
          <SectionHeader
            heading="Any thing you want to add"
            text="Add your notes on any thought that reflating your mood"
          />
          <AppInput
            label="Add Notes"
            multiline
            numberOfLines={10}
            placeholder="Today, I felt sad because of the university fyp submission."
            onChangeText={(text) => setNote(text)}
          />
        </ScrollView>
        <AppButton
          title="Save"
          disabled={note === ""}
          // onPress={() => router.push("")}
        />
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
