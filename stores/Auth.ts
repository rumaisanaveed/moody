import { getItem } from "@/services/Storage";
import { create } from "zustand";

type User = {
  username?: string;
  email: string;
};

type AuthState = {
  isAuthorized: boolean;
  user?: User | null;
  loading?: boolean;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthorized: Boolean(getItem("user") || false),
}));
