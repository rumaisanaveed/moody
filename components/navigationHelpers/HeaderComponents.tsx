import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable } from "react-native";

interface IHeaderLeftIconProps {
  onBackPress: () => void;
}

export function HeaderLeftIcon({ onBackPress }: IHeaderLeftIconProps) {
  return (
    <Pressable onPress={onBackPress}>
      <AntDesign name="arrowleft" size={24} color={Colors.BLACK_DARK} />
    </Pressable>
  );
}
