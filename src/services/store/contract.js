import create from "zustand";

export const useContractStore = create((set) => ({
  contractStore: null,
  setContractStore: (contractStore) => set({ contractStore }),
}));
