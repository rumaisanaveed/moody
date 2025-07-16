import AuthWrapper from "@/components/authWrappers/AuthWrapper";
import AppButton from "@/components/buttons/AppButton/AppButton";
import AppInput from "@/components/input/AppInput/AppInput";
import ShowErrorMessage from "@/components/messages/Messages";
import { useSignup } from "@/layouts/Auth/Signup/SignupContainer";
import React from "react";

export default function Signup() {
  const { isPending, control, handleSubmit, error, handleInputChange } =
    useSignup();

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
        onChange={handleInputChange}
      />
      <AppInput
        control={control}
        name="email"
        label="Email"
        placeholder="example@gmail.com"
        keyboardType="email-address"
        onChange={handleInputChange}
      />
      <AppInput
        control={control}
        name="password"
        label="Password"
        placeholder="Enter your password"
        onChange={handleInputChange}
        isPassword
      />
      {error && <ShowErrorMessage message={error} />}
      <AppButton
        title="Sign up"
        marginHorizontal={0}
        style={{
          marginTop: 20,
        }}
        onPress={handleSubmit}
        isPending={isPending}
      />
    </AuthWrapper>
  );
}
