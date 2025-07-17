import { saveToMoodEntry } from "@/services/Storage";
import { ISelectedItem } from "@/types/List";
import { getNamesArray } from "@/utilities/Utils";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function useChooseEmotions() {
  const [selectedReasons, setSelectedReasons] = useState<ISelectedItem[]>([]);
  const router = useRouter();

  const handleAddReason = (id: number, name: string) => {
    const newReason = {
      id,
      name,
    };
    setSelectedReasons((prev) => [...prev, newReason]);
  };

  const handleClearReasons = () => {
    setSelectedReasons([]);
  };

  const handleClearReason = (id: number) => {
    const newItems = selectedReasons.filter((item) => item.id !== id);
    setSelectedReasons(newItems);
  };

  const handleClick = () => {
    if (selectedReasons.length === 3) {
      const reasonsToSave = getNamesArray(selectedReasons);
      saveToMoodEntry({ reasons: reasonsToSave });
      router.push("/select-hours");
    }
  };

  return {
    selectedReasons,
    handleAddReason,
    handleClearReason,
    handleClearReasons,
    handleClick,
  };
}
