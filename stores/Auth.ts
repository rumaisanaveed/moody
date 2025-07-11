import { create } from "zustand";

interface IAuthStore {
  isAuthorized: true;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuthorized: true,
}));
