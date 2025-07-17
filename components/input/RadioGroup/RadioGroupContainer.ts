import { saveToMoodEntry } from "@/services/Storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SimpleRadioOption } from "./types";

export function useRadioGroup() {
  const router = useRouter();
  const [selected, setSelected] = useState<SimpleRadioOption | null>(null);

  const handleClick = () => {
    if (selected) {
      saveToMoodEntry({
        sleepHours: selected.value,
        sleepScore: selected.score,
      });
      router.push("/(app)/(mood-track)/add-note");
    }
  };

  return {
    selected,
    setSelected,
    handleClick,
  };
}
