import useChooseEmotions from "@/layouts/ChooseEmotions/ChooseEmotionsContainer";
import React from "react";
import ChooseItems from "./components/ChooseItems";

const ChooseEmotions = () => {
  const {
    selectedEmotions,
    handleAddEmotion,
    handleClearEmotion,
    handleClearEmotions,
  } = useChooseEmotions();

  return (
    <ChooseItems
      selectedItems={selectedEmotions}
      handleAddItem={handleAddEmotion}
      handleClearItem={handleClearEmotion}
      handleClearItems={handleClearEmotions}
      sectionHeading="Choose the emotions that make you feel neutral"
      sectionText="Select upto 3 emotions"
      buttonTitle="Continue"
      disabled={selectedEmotions.length !== 3}
      navigationPath="/(app)/(mood-track)/choose-reasons"
      listTitle="Emotions"
    />
  );
};

export default ChooseEmotions;
