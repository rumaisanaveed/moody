import AuthWrapper from "@/components/authWrappers/AuthWrapper";
import AppButton from "@/components/buttons/AppButton/AppButton";
import AppInput from "@/components/input/AppInput";
import { useSignup } from "@/layouts/Auth/Signup/SignupContainer";
import { useRouter } from "expo-router";
import React from "react";

// npm i react-native-keyboard-controller@1.16.5

export default function Signup() {
  const {} = useSignup();
  const router = useRouter();

  return (
    <AuthWrapper
      title="Sign up"
      subtitle="Enter your details username, email and password to create your account."
      bottomText="Already have an account?"
      mode="signup"
    >
      <AppInput
        label="Username"
        placeholder="Example User"
        keyboardType="default"
      />
      <AppInput
        label="Email"
        placeholder="example@gmail.com"
        keyboardType="email-address"
      />
      <AppInput label="Password" isPassword />
      <AppButton
        title="Sign up"
        marginHorizontal={0}
        style={{ marginTop: 10 }}
        onPress={() => router.push("/(app)/(tabs)")}
      />
    </AuthWrapper>
  );
}
