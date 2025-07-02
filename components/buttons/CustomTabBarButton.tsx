import { Colors } from "@/constants/Colors";
import React, { ReactNode } from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

export interface CustomTabBarButtonProps extends PressableProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
  children,
  onPress,
  style,
  ...rest
}) => (
  <Pressable
    onPress={onPress}
    style={[styles.customButtonContainer, style]}
    {...rest}
  >
    <View style={styles.customButton}>{children}</View>
  </Pressable>
);

const styles = {
  customButtonContainer: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  customButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: Colors.PURPLE,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
};
