import { emotions } from "@/constants/Data";
import useChooseEmotions from "@/layouts/ChooseEmotions/ChooseEmotionsContainer";
import React from "react";
import ChooseItems from "./components/ChooseItems";

const ChooseEmotions = () => {
  const {
    selectedItems,
    handleAddItem,
    handleClearItem,
    handleClearItems,
    handleClick,
  } = useChooseEmotions();

  return (
    <ChooseItems
      items={emotions}
      selectedItems={selectedItems}
      handleAddItem={handleAddItem}
      handleClearItem={handleClearItem}
      handleClearItems={handleClearItems}
      sectionHeading="Choose the emotions that make you feel neutral"
      sectionText="Select upto 3 emotions"
      buttonTitle="Continue"
      disabled={selectedItems.length !== 3}
      navigationPath="/(app)/(mood-track)/choose-reasons"
      listTitle="Emotions"
      handleBtnClick={handleClick}
    />
  );
};

export default ChooseEmotions;
