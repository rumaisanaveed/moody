import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React, { ReactNode } from "react";
import {
  PressableProps,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

export interface CustomTabBarButtonProps extends PressableProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
  children,
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push("/(app)/(mood-track)/choose-mood")}
      activeOpacity={1}
      style={[styles.customButtonContainer]}
    >
      <View style={styles.customButton}>{children}</View>
    </TouchableOpacity>
  );
};

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
