// file: AppInputContainer.ts
import { useState } from "react";
import { useController } from "react-hook-form";
import type { TextInputProps } from "react-native";

type UseAppInputProps = {
  name: string;
  control: any;
  shouldUnregister?: boolean;
  defaultValue?: any;
  isPassword?: boolean;
} & TextInputProps;

export default function useAppInput({
  name,
  control,
  shouldUnregister = false,
  defaultValue,
  isPassword = false,
}: UseAppInputProps) {
  const {
    field: { onChange, value },
    fieldState: { error, isTouched, invalid },
  } = useController({
    name,
    control,
    defaultValue,
    shouldUnregister,
  });

  const [showPassword, setShowPassword] = useState(isPassword);

  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  return {
    value,
    onChangeText: onChange,
    error: isTouched || invalid ? error?.message : undefined,
    showPassword,
    togglePasswordVisibility,
  };
}
