import AuthWrapper from "@/components/authWrappers/AuthWrapper";
import AppButton from "@/components/buttons/AppButton/AppButton";
import AppInput from "@/components/input/AppInput/AppInput";
import { useLogin } from "@/layouts/Auth/Login/LoginContainer";
import React from "react";

const Login = () => {
  const { control, handleSubmit } = useLogin();

  return (
    <AuthWrapper
      title="Sign in"
      subtitle="Please enter your registered email to continue"
      mode="login"
      bottomText="Don't have an account?"
    >
      <AppInput
        label="Email"
        control={control}
        name="email"
        placeholder="example@gmail.com"
        keyboardType="email-address"
      />
      <AppInput label="Password" name="password" isPassword control={control} />
      <AppButton
        title="Login"
        marginHorizontal={0}
        style={{ marginTop: 20 }}
        onPress={handleSubmit}
      />
    </AuthWrapper>
  );
};

export default Login;
