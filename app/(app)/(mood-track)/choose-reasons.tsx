import { moodReasons } from "@/constants/Data";
import useChooseReasons from "@/layouts/ChooseReasons/ChooseReasonsContainer";
import React from "react";
import ChooseItems from "./components/ChooseItems";

const ChooseReasons = () => {
  const {
    selectedItems,
    handleAddItem,
    handleClearItems,
    handleClearItem,
    handleClick,
  } = useChooseReasons();

  return (
    <ChooseItems
      items={moodReasons}
      selectedItems={selectedItems}
      handleAddItem={handleAddItem}
      handleClearItem={handleClearItem}
      handleClearItems={handleClearItems}
      sectionHeading="What's the reason making you feel this way?"
      sectionText="Select upto 3 reasons"
      buttonTitle="Continue"
      disabled={selectedItems.length !== 3}
      navigationPath="/(app)/(mood-track)/select-hours"
      listTitle="Reasons"
      handleBtnClick={handleClick}
    />
  );
};

export default ChooseReasons;
