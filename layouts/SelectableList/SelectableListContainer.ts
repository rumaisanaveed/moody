import { ISelectedItem } from "@/types/List";
import { useRouter } from "expo-router";
import { useState } from "react";

interface ISelectableListContainer {
  maxSelected: number;
  onSave: (names: string[]) => void;
  nextRoute: Parameters<ReturnType<typeof useRouter>["push"]>[0];
}

export default function useSelectableList({
  maxSelected,
  onSave,
  nextRoute,
}: ISelectableListContainer) {
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<ISelectedItem[]>([]);

  const handleAddItem = (id: number, name: string) => {
    const isItemAlreadyPresent = selectedItems.some((item) => item.id === id);
    if (isItemAlreadyPresent || selectedItems.length >= maxSelected) return;
    setSelectedItems((prev) => [...prev, { id, name }]);
  };

  const handleClearItems = () => setSelectedItems([]);

  const handleClearItem = (id: number) =>
    setSelectedItems((prev) => prev.filter((item) => item.id !== id));

  const getSelectedNames = (items: ISelectedItem[]) => {
    return items.map((item) => item.name);
  };

  const handleClick = () => {
    if (selectedItems.length === maxSelected) {
      onSave(getSelectedNames(selectedItems));
      router.push(nextRoute);
    }
  };

  return {
    selectedItems,
    handleAddItem,
    handleClearItem,
    handleClearItems,
    handleClick,
  };
}
