import { TouchableOpacityProps } from "react-native";

export type TAppButton = {
  title: string;
  // onpres?: () => void;
  disabled?: boolean;
} & TouchableOpacityProps;
