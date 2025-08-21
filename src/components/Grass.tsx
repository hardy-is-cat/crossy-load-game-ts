import { tileSize, tilesPerRow } from "../constants";

type GrassTypes = {
  rowIndex: number;
  children?: React.ReactNode;
};

function Grass({ rowIndex, children }: GrassTypes) {
  return (
    <group position-y={rowIndex * tileSize}>
      <mesh receiveShadow>
        <boxGeometry args={[tilesPerRow * tileSize, tileSize, 3]} />
        <meshLambertMaterial color={0xbaf455} flatShading />
      </mesh>
      {children}
    </group>
  );
}

export default Grass;
