import { GetSevenDaysMoodEntries } from "@/apis/Mood/Mood";
import { IMoodData, IMoodEntry } from "@/apis/Mood/types";
import { weekDays } from "@/constants/Data";
import { getCurrentDay } from "@/utilities/Utils";
import { useEffect, useState } from "react";
import { IMoodProps } from "./types";

export default function useHomeContainer() {
  const currentDayName = getCurrentDay();
  const currentDayIndex = weekDays.findIndex(
    (day) => day.toLowerCase() === currentDayName.toLowerCase()
  );

  const { isPending, isError, data } = GetSevenDaysMoodEntries();
  const [isCompleteNoteVisible, setIsCompleteNoteVisible] =
    useState<boolean>(false);
  const [sevenDaysMoods, setSevenDaysMoods] = useState<IMoodProps[]>([]);

  let moodEntriesData: IMoodEntry[] = [];
  if (data && !isPending) {
    const dataObject: IMoodData = data[0];
    const { moodEntries } = dataObject;
    moodEntriesData = [...moodEntries].reverse();
  }

  const toggleNoteVisibility = () => {
    setIsCompleteNoteVisible((prev) => !prev);
  };

  const getSevenDaysMood = () => {
    return moodEntriesData.map((item) => ({
      day: item.dayOfWeek,
      mood: item.mood,
    }));
  };

  useEffect(() => {
    const weekMoods = getSevenDaysMood();
    if (weekMoods) setSevenDaysMoods(weekMoods);
  }, [data]);

  return {
    currentDayIndex,
    isPending,
    isError,
    data,
    sevenDaysMoods,
    moodEntriesData,
    toggleNoteVisibility,
    isCompleteNoteVisible,
    setIsCompleteNoteVisible,
  };
}
