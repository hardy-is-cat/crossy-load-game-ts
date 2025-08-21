import * as THREE from "three";
import useGameState from "../stores/game";
import { useFrame } from "@react-three/fiber";
import { state as playerState } from "../stores/player";
import { handleKeyDown } from "./useEventListeners";

function useHitDetection(
  vehicle: React.RefObject<THREE.Object3D | null>,
  rowIndex: number
) {
  const endGame = useGameState((state) => state.endGame);

  useFrame(() => {
    if (!vehicle.current) return;
    if (!playerState.ref) return;

    if (rowIndex === playerState.currentRow) {
      const vehicleBoundingBox = new THREE.Box3();
      vehicleBoundingBox.setFromObject(vehicle.current);

      const playerBoundingBox = new THREE.Box3();
      playerBoundingBox.setFromObject(playerState.ref);

      if (playerBoundingBox.intersectsBox(vehicleBoundingBox)) {
        endGame();
        window.removeEventListener("keydown", handleKeyDown);
      }
    }
  });
}

export default useHitDetection;
