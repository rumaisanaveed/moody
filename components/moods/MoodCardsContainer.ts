import { GetSevenDaysMoodEntries } from "@/apis/Mood/Mood";
import { useState } from "react";

export default function useMoodCards() {
  const { isPending, isError, data } = GetSevenDaysMoodEntries();
  const [isCompleteNoteVisible, setIsCompleteNoteVisible] =
    useState<boolean>(false);

  const toggleNoteVisibility = () => {
    setIsCompleteNoteVisible((prev) => !prev);
  };

  return {
    isPending,
    isError,
    data,
    toggleNoteVisibility,
    isCompleteNoteVisible,
    setIsCompleteNoteVisible,
  };
}
