import AuthWrapper from "@/components/authWrappers/AuthWrapper";
import AppButton from "@/components/buttons/AppButton/AppButton";
import AppInput from "@/components/input/AppInput/AppInput";
import EmailInput from "@/components/input/Email/EmailInput";
import PasswordInput from "@/components/input/Password/PasswordInput";
import ShowErrorMessage from "@/components/messages/Messages";
import { useSignup } from "@/layouts/Auth/Signup/SignupContainer";
import React from "react";

export default function Signup() {
  const { isPending, control, handleSubmit, error, handleClearError } =
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
        onChange={handleClearError}
      />
      {/* <AppInput
        control={control}
        name="email"
        label="Email"
        placeholder="example@gmail.com"
        keyboardType="email-address"
        onChange={handleClearError}
      /> */}
      <EmailInput onChange={handleClearError} control={control} />
      {/* <AppInput
        control={control}
        name="password"
        label="Password"
        placeholder="Enter your password"
        onChange={handleClearError}
        isPassword
      /> */}
      <PasswordInput onChange={handleClearError} control={control} />
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
