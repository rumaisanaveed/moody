import { Signup } from "@/apis/Auth";
import { saveUser } from "@/services/Storage";
import { useAuthStore } from "@/stores/Auth";
import { SignupFormSchema } from "@/validations";
import { FirebaseError } from "firebase/app";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignupFormValues } from "../types";

function getFirebaseErrorMessage(error: FirebaseError): string {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "This email is already in use. Please use a different email.";
    case "auth/invalid-email":
      return "The email address is not valid.";
    case "auth/account-exists-with-different-credential":
      return "Invalid credentials";
    case "auth/user-disabled":
      return "Oops, your account has been disabled.";
    default:
      return error.message || "An unknown error occurred. Please try again.";
  }
}

export function useSignup() {
  const [error, setError] = useState<string | null>(null);
  const { control, handleSubmit } = useForm<SignupFormValues>({
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: SignupFormSchema,
  });

  const {
    mutate: signup,
    isPending,
    isError,
  } = Signup({
    onSuccess(data) {
      saveUser(data);
      useAuthStore.setState({ isAuthorized: true });
    },
    onError(error: FirebaseError) {
      setError(getFirebaseErrorMessage(error));
    },
  });

  const onSubmit = (data: SignupFormValues) => {
    signup(data);
  };

  const handleInputChange = () => {
    if (error) setError(null);
  };

  return {
    control,
    isError,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    error,
    setError,
    handleInputChange,
  };
}
