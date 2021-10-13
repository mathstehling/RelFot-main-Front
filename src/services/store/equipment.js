import create from "zustand";

export const useEquipmentStore = create((set) => ({
  equipmentStore: null,
  setEquipmentStore: (equipmentStore) => set({ equipmentStore }),
}));
