import { Colors } from "@/constants/Colors";
import { Regular, SemiBold } from "@/utilities/Fonts";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Control } from "react-hook-form";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import useAppInput from "./AppInputContainer";

type AppInputProps = {
  control: Control<any>;
  name: string;
  label?: string;
  multiline?: boolean;
  numberOfLines?: number;
  isPassword?: boolean;
  style?: StyleProp<ViewStyle>;
} & TextInputProps;

const AppInput = ({
  control,
  name,
  label,
  multiline = false,
  numberOfLines = 5,
  isPassword = false,
  style,
  placeholder,
  ...rest
}: AppInputProps) => {
  const { value, onChangeText, error, showPassword, togglePasswordVisibility } =
    useAppInput({
      name,
      control,
      isPassword,
    });

  return (
    <View>
      {label && (
        <Text style={[styles.label, !error && styles.mt10]}>{label}</Text>
      )}
      <View style={styles.row}>
        <TextInput
          style={[
            styles.input,
            isPassword ? styles.password : styles.fullWidth,
            multiline && {
              height: numberOfLines * 24,
              textAlignVertical: "top",
            },
            style,
          ]}
          secureTextEntry={showPassword}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : 1}
          placeholderTextColor={Colors.BLACK_LIGHT}
          placeholder={isPassword ? "Show Password" : placeholder}
          {...rest}
        />
        <View style={styles.passwordInputContainer}>
          {isPassword && (
            <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
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
            </TouchableWithoutFeedback>
          )}
        </View>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
  },
  label: {
    ...SemiBold(18, Colors.BLACK_DARK),
  },
  mt10: {
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 8,
    paddingHorizontal: 12,
    ...Regular(14, Colors.BLACK_DARK),
    alignItems: "center",
  },
  password: {
    width: "90%",
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  fullWidth: {
    width: "100%",
  },
  passwordInputContainer: {
    marginRight: 0,
    paddingRight: 20,
  },
  eyeButton: {
    flex: 1,
    borderWidth: 1,
    paddingRight: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 0,
    borderColor: Colors.GRAY,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  error: {
    marginTop: 4,
    ...Regular(12, Colors.RED),
  },
});
