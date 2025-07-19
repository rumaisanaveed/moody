import React from "react";
import { Control } from "react-hook-form";
import AppInput from "../AppInput/AppInput";

type PasswordInputProps = {
  control: Control<any>;
  name?: string;
  label?: string;
  placeholder?: string;
  onChange?: () => void;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  control,
  name = "password",
  label = "Password",
  placeholder = "Enter your password",
  onChange,
  ...rest
}) => (
  <AppInput
    control={control}
    name={name}
    label={label}
    placeholder={placeholder}
    autoCapitalize="none"
    autoCorrect={false}
    onChange={onChange}
    isPassword
    {...rest}
  />
);

export default PasswordInput;
