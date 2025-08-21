import { create } from "zustand";
import { Row } from "../types";
import generateRows from "../utilities/generateRows";

interface StoreState {
  rows: Row[];
  addRows: () => void;
  resetRows: () => void;
}

const useMapStore = create<StoreState>((set) => ({
  rows: generateRows(20),
  addRows: () => {
    const newRows = generateRows(20);
    set((state) => ({ rows: [...state.rows, ...newRows] }));
  },
  resetRows: () => set({ rows: generateRows(20) }),
}));

export default useMapStore;
