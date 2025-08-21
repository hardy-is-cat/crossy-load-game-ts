import { create } from "zustand";
import { resetPlayer } from "./player";
import useMapStore from "./map";
import { handleKeyDown } from "../hooks/useEventListeners";

interface GameState {
  score: number;
  status: "running" | "over";
  updateScore: (rowIndex: number) => void;
  endGame: () => void;
  resetGame: () => void;
}

const useGameState = create<GameState>((set) => ({
  score: 0,
  status: "running",
  updateScore: (rowIndex: number) => {
    set((state) => ({ score: Math.max(state.score, rowIndex) }));
  },
  endGame: () => {
    set({ status: "over" });
  },
  resetGame: () => {
    useMapStore.getState().resetRows();
    resetPlayer();
    window.addEventListener("keydown", handleKeyDown);
    set({ score: 0, status: "running" });
  },
}));

export default useGameState;
