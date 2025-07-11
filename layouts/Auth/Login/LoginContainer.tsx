import { LoginFormSchema } from "@/validations";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { LoginFormValues } from "../types";

export function useLogin() {
  const router = useRouter();
  const { control, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: LoginFormSchema,
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login Form submitted: ", data);
    router.push("/(app)/(tabs)");
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
  };
}
