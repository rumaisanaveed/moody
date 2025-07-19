import { saveToMoodEntry } from "@/services/Storage";
import useSelectableList from "../SelectableList/SelectableListContainer";

export default function useChooseEmotions() {
  return useSelectableList({
    maxSelected: 3,
    onSave: (emotions) => saveToMoodEntry({ emotions }),
    nextRoute: "/choose-reasons",
  });
}
