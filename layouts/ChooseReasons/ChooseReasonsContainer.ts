import { ISelectedItem } from "@/types/List";
import { useState } from "react";

export default function useChooseEmotions() {
  const [selectedReasons, setSelectedReasons] = useState<ISelectedItem[]>([]);

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

  return {
    selectedReasons,
    handleAddReason,
    handleClearReason,
    handleClearReasons,
  };
}
