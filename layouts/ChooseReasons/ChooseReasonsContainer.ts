import { saveToMoodEntry } from "@/services/Storage";
import useSelectableList from "../SelectableList/SelectableListContainer";

export default function useChooseReasons() {
  return useSelectableList({
    maxSelected: 3,
    onSave: (reasons) => saveToMoodEntry({ reasons }),
    nextRoute: "/select-hours",
  });
}
