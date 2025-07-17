import { saveToMoodEntry } from "@/services/Storage";
import { ISelectedItem } from "@/types/List";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function useChooseEmotions() {
  const router = useRouter();
  const [selectedEmotions, setSelectedEmotions] = useState<ISelectedItem[]>([]);

  const handleAddEmotion = (id: number, name: string) => {
    const isItemAlreadyPresent = selectedEmotions.some(
      (item) => item.id === id
    );
    if (isItemAlreadyPresent || selectedEmotions.length >= 3) return;

    const newEmotion = {
      id,
      name,
    };
    setSelectedEmotions((prev) => [...prev, newEmotion]);
  };

  const handleClearEmotions = () => {
    setSelectedEmotions([]);
  };

  const handleClearEmotion = (id: number) => {
    const newItems = selectedEmotions.filter((item) => item.id !== id);
    setSelectedEmotions(newItems);
  };

  // add it to storage or state
  const getSelectedEmotionsAsArray = () => {
    return selectedEmotions.map((item) => item.name);
  };

  const handleClick = () => {
    if (selectedEmotions.length === 3) {
      const emotionsToSave = getSelectedEmotionsAsArray();
      saveToMoodEntry({ emotions: emotionsToSave });
      router.push("/choose-reasons");
    }
  };

  return {
    handleAddEmotion,
    handleClearEmotion,
    handleClearEmotions,
    selectedEmotions,
    handleClick,
  };
}
