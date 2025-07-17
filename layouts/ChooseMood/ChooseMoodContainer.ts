import { moodWithScores } from "@/constants/Data";
import { saveToMoodEntry } from "@/services/Storage";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function useChooseMood() {
  const router = useRouter();
  const [selectedEmojiId, setSelectedEmojiId] = useState<number | null>(null);

  const handleSelectEmoji = (id: number) => {
    setSelectedEmojiId(id);
  };

  const handleClick = () => {
    if (selectedEmojiId) {
      const selectedMood = moodWithScores[selectedEmojiId];
      const { text: moodText, emoji: mood, score: moodScore } = selectedMood;
      const moodData = {
        mood: mood,
        moodText: moodText,
        moodScore: moodScore,
      };
      saveToMoodEntry(moodData);
      router.push("/(app)/(mood-track)/choose-emotions");
    }
  };

  return {
    handleSelectEmoji,
    selectedEmojiId,
    handleClick,
  };
}
