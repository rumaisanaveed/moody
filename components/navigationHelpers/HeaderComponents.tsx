import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";

interface IHeaderLeftIconProps {
  onBackPress: () => void;
}

export function HeaderLeftIcon({ onBackPress }: IHeaderLeftIconProps) {
  return (
    <TouchableOpacity onPress={onBackPress} activeOpacity={0.7}>
      <AntDesign name="arrowleft" size={24} color={Colors.BLACK_DARK} />
    </TouchableOpacity>
  );
}
