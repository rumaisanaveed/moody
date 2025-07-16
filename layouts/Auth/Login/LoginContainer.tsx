import { Login } from "@/apis/Auth";
import { setItem } from "@/services/Storage";
import { useAuthStore } from "@/stores/Auth";
import { LoginFormSchema } from "@/validations";
import { FirebaseError } from "firebase/app";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFormValues } from "../types";

function getErrorMessage(error: FirebaseError): string {
  switch (error.code) {
    case "auth/invalid-credential":
      return "Email or password is incorrect";
    case "auth/user-disabled":
      return "Your account has been disabled. Please try again later.";
    case "auth/too-many-requests":
      return "You have sent too many requests. Please try again later.";
    default:
      return "Login Failed! Please try again.";
  }
}

export function useLogin() {
  const [error, setError] = useState<string | null>(null);
  const { control, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: LoginFormSchema,
  });

  const {
    mutate: login,
    isPending,
    isSuccess,
  } = Login({
    onSuccess(data) {
      // console.log("User after login", data);
      setItem("user", data);
      useAuthStore.setState({
        isAuthorized: true,
      });
    },
    onError(error: FirebaseError) {
      setError(getErrorMessage(error));
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    login(data);
  };

  const handleInputChange = () => {
    if (error) setError(null);
  };

  return {
    isPending,
    error,
    control,
    isSuccess,
    handleInputChange,
    handleSubmit: handleSubmit(onSubmit),
  };
}
