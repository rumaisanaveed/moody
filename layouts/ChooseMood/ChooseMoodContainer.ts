import { useState } from "react";

export default function useChooseMood() {
  const [selectedEmojiId, setSelectedEmojiId] = useState<number | null>(null);

  const handleSelectEmoji = (id: number) => {
    setSelectedEmojiId(id);
  };

  return {
    handleSelectEmoji,
    selectedEmojiId,
  };
}
