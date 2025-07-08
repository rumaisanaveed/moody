import { ISelectedItem } from "@/types/List";
import { useState } from "react";

export default function useChooseEmotions() {
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

  return {
    handleAddEmotion,
    handleClearEmotion,
    handleClearEmotions,
    selectedEmotions,
  };
}
