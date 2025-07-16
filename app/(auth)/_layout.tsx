import { useAuthStore } from "@/stores/Auth";
import { Redirect, Slot } from "expo-router";

export default function AuthLayout() {
  const { isAuthorized } = useAuthStore();

  if (isAuthorized) {
    return <Redirect href="/(app)/(tabs)" />;
  }

  return <Slot />;
}
