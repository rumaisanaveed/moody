import { useState } from "react";

export function useRadioGroup() {
  const [selected, setSelected] = useState<string | null>(null);

  return {
    selected,
    setSelected,
  };
}
