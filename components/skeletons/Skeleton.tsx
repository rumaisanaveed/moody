import { Colors } from "@/constants/Colors";
import { StyleSheet, ViewStyle } from "react-native";
import {
  ANIMATION_DIRECTION,
  ANIMATION_TYPE,
  SkaletonView,
} from "react-native-skaleton-kit";

interface ISkeletonProps {
  viewHeight: number;
  viewWidth: number;
  style?: ViewStyle;
  variant: "rounded" | "circle" | "rectangular";
}

export default function Skeleton({
  viewHeight,
  viewWidth,
  style = {},
  variant,
}: ISkeletonProps) {
  return (
    <SkaletonView
      viewHeight={viewHeight}
      viewWidth={viewWidth}
      backgroundColor={Colors.LIGHT_WHITE}
      animationType={ANIMATION_TYPE.shiver}
      direction={ANIMATION_DIRECTION.leftToRight}
      style={{ ...variantStyles[variant], ...style }}
    />
  );
}

const variantStyles = StyleSheet.create({
  circle: { borderRadius: 9999 },
  rounded: { borderRadius: 100 },
  rectangular: { borderRadius: 0 },
});
