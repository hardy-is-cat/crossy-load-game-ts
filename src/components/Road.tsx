import { tileSize, tilesPerRow } from "../constants";

type RoadTypes = {
  rowIndex: number;
  children?: React.ReactNode;
};

function Road({ rowIndex, children }: RoadTypes) {
  return (
    <group position-y={rowIndex * tileSize}>
      <mesh receiveShadow>
        <planeGeometry args={[tilesPerRow * tileSize, tileSize]} />
        <meshLambertMaterial color={0x454a59} flatShading />
      </mesh>
      {children}
    </group>
  );
}

export default Road;
