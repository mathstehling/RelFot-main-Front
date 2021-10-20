import create from "zustand";

export const useDateStore = create((set) => ({
  dateStore: null,
  setDateStore: (dateStore) => set({ dateStore }),
}));
