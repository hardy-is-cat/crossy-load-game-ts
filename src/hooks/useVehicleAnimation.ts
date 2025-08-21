import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { maxTileIndex, minTileIndex, tileSize } from "../constants";

export default function useVehicleAnimation(
  ref: React.RefObject<THREE.Group | null>,
  direction: boolean,
  speed: number
) {
  useFrame((_, delta) => {
    if (!ref.current) return;

    const vehicle = ref.current;
    const beginningOfRow = (minTileIndex - 2) * tileSize;
    const endOfRow = (maxTileIndex + 2) * tileSize;

    if (direction) {
      vehicle.position.x =
        vehicle.position.x > endOfRow
          ? beginningOfRow
          : vehicle.position.x + delta * speed;
    } else {
      vehicle.position.x =
        vehicle.position.x < beginningOfRow
          ? endOfRow
          : vehicle.position.x - delta * speed;
    }
  });
}
