import useChooseReasons from "@/layouts/ChooseReasons/ChooseReasonsContainer";
import React from "react";
import ChooseItems from "./components/ChooseItems";

const ChooseReasons = () => {
  const {
    selectedReasons,
    handleAddReason,
    handleClearReason,
    handleClearReasons,
    handleClick,
  } = useChooseReasons();

  return (
    <ChooseItems
      selectedItems={selectedReasons}
      handleAddItem={handleAddReason}
      handleClearItem={handleClearReason}
      handleClearItems={handleClearReasons}
      sectionHeading="What's the reason making you feel this way?"
      sectionText="Select upto 3 reasons"
      buttonTitle="Continue"
      disabled={selectedReasons.length !== 3}
      navigationPath="/(app)/(mood-track)/select-hours"
      listTitle="Reasons"
      handleBtnClick={handleClick}
    />
  );
};

export default ChooseReasons;
