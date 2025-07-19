import React from "react";
import { Control } from "react-hook-form";
import AppInput from "../AppInput/AppInput";

type EmailInputProps = {
  control: Control<any>;
  name?: string;
  label?: string;
  placeholder?: string;
  onChange?: () => void;
};

const EmailInput: React.FC<EmailInputProps> = ({
  control,
  name = "email",
  label = "Email",
  placeholder = "example@gmail.com",
  onChange,
  ...rest
}) => (
  <AppInput
    control={control}
    name={name}
    label={label}
    placeholder={placeholder}
    keyboardType="email-address"
    autoCapitalize="none"
    autoCorrect={false}
    onChange={onChange}
    {...rest}
  />
);

export default EmailInput;
