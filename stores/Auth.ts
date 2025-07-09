import { create } from "zustand";

interface IAuthStore {
  isAuthorized: false;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuthorized: false,
}));
