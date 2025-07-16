import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";

export type TAppButton = {
  title: string;
  // onpres?: () => void;
  disabled?: boolean;
  isPending?: boolean;
  marginHorizontal?: number;
  style?: StyleProp<ViewStyle>;
} & TouchableOpacityProps;
