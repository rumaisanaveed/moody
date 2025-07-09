import AuthWrapper from "@/components/authWrappers/AuthWrapper";
import AppButton from "@/components/buttons/AppButton/AppButton";
import AppInput from "@/components/input/AppInput";
import { useLogin } from "@/layouts/Auth/Login/LoginContainer";
import { useRouter } from "expo-router";
import React from "react";

const Login = () => {
  const router = useRouter();
  const {} = useLogin();

  return (
    <AuthWrapper
      title="Sign in"
      subtitle="Please enter your registered email to continue"
      mode="login"
      bottomText="Don't have an account?"
    >
      <AppInput
        label="Email"
        placeholder="example@gmail.com"
        keyboardType="email-address"
      />
      <AppInput label="Password" isPassword />
      <AppButton
        title="Login"
        marginHorizontal={0}
        style={{ marginTop: 20 }}
        onPress={() => router.push("/(app)/(tabs)")}
      />
    </AuthWrapper>
  );
};

export default Login;
