import { Colors } from "@/constants/Colors";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export const CustomTabBarComponent: React.FC<BottomTabBarButtonProps> = ({
  children,
  onPress,
  accessibilityState,
}) => {
  const isSelected = accessibilityState?.selected;

  const backgroundColor = isSelected ? Colors.LIGHT_WHITE : Colors.WHITE;

  return Platform.OS === "android" ? (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor,
        }}
      >
        {children}
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor,
      }}
    >
      {children}
    </TouchableOpacity>
  );
};
