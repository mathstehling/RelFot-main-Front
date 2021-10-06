import create from "zustand";

export const useRegionalStore = create((set) => ({
  regionalStore: null,
  setRegionalStore: (regionalStore) => set({ regionalStore }),
}));
