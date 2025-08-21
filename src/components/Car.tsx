import * as THREE from "three";
import { tileSize } from "../constants";
import Wheel from "./Wheel";
import { useRef } from "react";
import useVehicleAnimation from "../hooks/useVehicleAnimation";
import useHitDetection from "../hooks/useHitDetection";

type CarTypes = {
  rowIndex: number;
  initialTileIndex: number;
  direction: boolean;
  speed: number;
  color: THREE.ColorRepresentation;
};

function Car({
  rowIndex,
  initialTileIndex,
  direction,
  speed,
  color,
}: CarTypes) {
  const carRef = useRef<THREE.Group>(null);
  useVehicleAnimation(carRef, direction, speed);
  useHitDetection(carRef, rowIndex);

  return (
    <>
      <group
        position-x={initialTileIndex * tileSize}
        rotation-z={direction ? 0 : Math.PI}
        ref={carRef}
      >
        <mesh position={[0, 0, 12]} castShadow receiveShadow>
          <boxGeometry args={[60, 30, 15]} />
          <meshLambertMaterial color={color} flatShading />
        </mesh>
        <mesh position={[-6, 0, 25.5]} castShadow receiveShadow>
          <boxGeometry args={[33, 24, 12]} />
          <meshLambertMaterial color={0xffffff} flatShading />
        </mesh>
        <Wheel x={-18} />
        <Wheel x={18} />
      </group>
    </>
  );
}

export default Car;
