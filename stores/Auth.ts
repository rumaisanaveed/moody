import { getItem } from "@/services/Storage";
import { create } from "zustand";

type AuthState = {
  isAuthorized: boolean;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthorized: Boolean(getItem("user") || false),
}));
