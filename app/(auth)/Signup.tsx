import AuthWrapper from "@/components/authWrappers/AuthWrapper";
import AppButton from "@/components/buttons/AppButton/AppButton";
import AppInput from "@/components/input/AppInput/AppInput";
import { useSignup } from "@/layouts/Auth/Signup/SignupContainer";
import React from "react";

export default function Signup() {
  const { control, handleSubmit } = useSignup();

  return (
    <AuthWrapper
      title="Sign up"
      subtitle="Enter your details username, email and password to create your account."
      bottomText="Already have an account?"
      mode="signup"
    >
      <AppInput
        control={control}
        name="username"
        label="Username"
        placeholder="Example User"
        keyboardType="default"
      />
      <AppInput
        control={control}
        name="email"
        label="Email"
        placeholder="example@gmail.com"
        keyboardType="email-address"
      />
      <AppInput
        control={control}
        name="password"
        label="Password"
        placeholder="Enter your password"
        isPassword
      />
      <AppButton
        title="Sign up"
        marginHorizontal={0}
        style={{ marginTop: 10 }}
        onPress={handleSubmit}
      />
    </AuthWrapper>
  );
}
