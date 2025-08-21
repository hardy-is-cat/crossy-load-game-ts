import * as THREE from "three";
import { useRef } from "react";
import { tileSize } from "../constants";
import Wheel from "./Wheel";
import useVehicleAnimation from "../hooks/useVehicleAnimation";
import useHitDetection from "../hooks/useHitDetection";

type TruckTypes = {
  rowIndex: number;
  initialTileIndex: number;
  direction: boolean;
  speed: number;
  color: THREE.ColorRepresentation;
};

function Truck({
  rowIndex,
  initialTileIndex,
  direction,
  speed,
  color,
}: TruckTypes) {
  const truckRef = useRef<THREE.Group>(null);
  useVehicleAnimation(truckRef, direction, speed);
  useHitDetection(truckRef, rowIndex);

  return (
    <group
      position-x={initialTileIndex * tileSize}
      rotation-z={direction ? 0 : Math.PI}
      ref={truckRef}
    >
      <mesh position={[35, 0, 23]} castShadow receiveShadow>
        <boxGeometry args={[30, 30, 30]} />
        <meshLambertMaterial color={color} flatShading />
      </mesh>
      <mesh position={[-15, 0, 25]} castShadow receiveShadow>
        <boxGeometry args={[70, 35, 35]} />
        <meshLambertMaterial color={0xb4c6fc} flatShading />
      </mesh>
      <Wheel x={-35} />
      <Wheel x={5} />
      <Wheel x={35} />
    </group>
  );
}

export default Truck;
