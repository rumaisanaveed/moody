import { Colors } from "@/constants/Colors";
import useAppInput from "@/layouts/Input/AppInputContainer";
import { Regular, SemiBold } from "@/utilities/Fonts";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type AppInputProps = {
  label?: string;
  error?: string;
  multiline?: boolean;
  numberOfLines?: number;
  isPassword?: boolean;
  style?: StyleProp<ViewStyle>;
} & TextInputProps;

const AppInput = ({
  label,
  error,
  multiline = false,
  numberOfLines = 5,
  isPassword = false,
  style,
  placeholder,
  ...rest
}: AppInputProps) => {
  const { showPassword, togglePasswordVisibility } = useAppInput();

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          multiline && { height: numberOfLines * 24, textAlignVertical: "top" },
          style,
        ]}
        secureTextEntry={showPassword}
        multiline={multiline}
        numberOfLines={multiline ? numberOfLines : 1}
        placeholderTextColor={Colors.BLACK_LIGHT}
        placeholder={isPassword ? "Show Password" : placeholder}
        {...rest}
      />
      {isPassword && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          {showPassword ? (
            <AntDesign
              name="eye"
              size={24}
              color={Colors.BLACK}
              style={styles.eyeButton}
            />
          ) : (
            <Feather
              name="eye-off"
              size={24}
              color={Colors.BLACK}
              style={styles.eyeButton}
            />
          )}
        </TouchableOpacity>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  label: {
    marginTop: 10,
    // marginBottom: 3,
    ...SemiBold(18, Colors.BLACK_DARK),
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 8,
    paddingHorizontal: 12,
    // marginVertical: 5,
    ...Regular(14, Colors.BLACK_DARK),
    alignItems: "center",
  },
  eyeButton: {
    position: "absolute",
    bottom: 10,
    right: 8,
  },
  error: {
    marginTop: 4,
    ...Regular(12, Colors.RED),
  },
});
