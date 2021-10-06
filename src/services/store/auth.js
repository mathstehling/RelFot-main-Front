import create from "zustand";

export const useUserStore = create((set) => ({
  userAuth: null,
  setUserAuth: (userAuth) => set({ userAuth }),
}));
