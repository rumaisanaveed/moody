import { FontVariations } from "@/utilities/Fonts";
import { useFonts } from "expo-font";

export default function useStartupWrapper() {
  const [loaded] = useFonts(FontVariations);

  return {
    loaded,
  };
}
