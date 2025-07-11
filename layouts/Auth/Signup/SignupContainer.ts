import { SignupFormSchema } from "@/validations";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { SignupFormValues } from "../types";

export function useSignup() {
  const router = useRouter();
  const { control, handleSubmit } = useForm<SignupFormValues>({
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: SignupFormSchema,
  });

  const onSubmit = (data: SignupFormValues) => {
    console.log("Signup Form submitted: ", data);
    router.push("/(app)/(tabs)");
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
  };
}
