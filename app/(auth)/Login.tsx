import AuthWrapper from "@/components/authWrappers/AuthWrapper";
import AppButton from "@/components/buttons/AppButton/AppButton";
import EmailInput from "@/components/input/Email/EmailInput";
import PasswordInput from "@/components/input/Password/PasswordInput";
import ShowErrorMessage from "@/components/messages/Messages";
import { useLogin } from "@/layouts/Auth/Login/LoginContainer";
import React from "react";

const Login = () => {
  const { control, handleSubmit, isPending, error, handleClearError } =
    useLogin();

  return (
    <AuthWrapper
      title="Sign in"
      subtitle="Please enter your registered email to continue"
      mode="login"
      bottomText="Don't have an account?"
    >
      <EmailInput onChange={handleClearError} control={control} />
      <PasswordInput onChange={handleClearError} control={control} />
      {error && <ShowErrorMessage message={error} />}
      <AppButton
        title="Login"
        marginHorizontal={0}
        style={{ marginTop: 20 }}
        onPress={handleSubmit}
        isPending={isPending}
      />
    </AuthWrapper>
  );
};

export default Login;
