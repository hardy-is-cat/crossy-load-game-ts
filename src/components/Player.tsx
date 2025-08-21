import * as THREE from "three";
import { Bounds } from "@react-three/drei";
import { useEffect, useRef } from "react";
import usePlayerAnimation from "../hooks/usePlayerAnimation";
import { useFrame, useThree } from "@react-three/fiber";
import DirectionalLight from "./DirectionalLight";
import { setRef } from "../stores/player";

function Player() {
  const playerRef = useRef<THREE.Group>(null);
  const camera = useThree((state) => state.camera);
  const lightRef = useRef<THREE.DirectionalLight>(null);

  usePlayerAnimation(playerRef);

  // 카메라가 유저를 따라가게 만듦
  useFrame(() => {
    if (!playerRef.current) return;
    const playerPos = playerRef.current.position;
    camera.position.lerp(
      new THREE.Vector3(
        playerPos.x + 300,
        playerPos.y - 300,
        playerPos.z + 300
      ),
      1
    );
    camera.lookAt(playerPos);
  });

  useEffect(() => {
    if (!playerRef.current) return;
    if (!lightRef.current) return;

    lightRef.current.target = playerRef.current;

    setRef(playerRef.current);
  });

  return (
    <>
      <Bounds fit clip observe margin={10}>
        <group ref={playerRef}>
          <group>
            <mesh position={[0, 0, 10]} castShadow receiveShadow>
              <boxGeometry args={[15, 15, 20]} />
              <meshLambertMaterial color={0xffffff} flatShading />
            </mesh>
            {/* 벼슬 */}
            <group rotation-z={THREE.MathUtils.degToRad(-90)}>
              <mesh position={[0, 1, 23.5]} castShadow receiveShadow>
                <boxGeometry args={[2, 2, 1]} />
                <meshLambertMaterial color={0xf0619a} flatShading />
              </mesh>
              <mesh position={[0, 0.5, 22.5]} castShadow receiveShadow>
                <boxGeometry args={[2, 3, 1.5]} />
                <meshLambertMaterial color={0xf0619a} flatShading />
              </mesh>
              <mesh position={[0, 0, 21]} castShadow receiveShadow>
                <boxGeometry args={[2, 4, 2]} />
                <meshLambertMaterial color={0xf0619a} flatShading />
              </mesh>
            </group>
            {/* 눈 */}
            <group>
              <group>
                <mesh
                  rotation-x={THREE.MathUtils.degToRad(-90)}
                  position={[-4, 7.7, 14.5]}
                  receiveShadow
                >
                  <planeGeometry args={[0.7, 0.7, 1]} />
                  <meshLambertMaterial color={0xffffff} flatShading />
                </mesh>
                <mesh
                  position={[-3.5, 7.6, 14]}
                  rotation-x={THREE.MathUtils.degToRad(-90)}
                  receiveShadow
                >
                  <planeGeometry args={[2.5, 2.5, 2]} />
                  <meshLambertMaterial color={0x444444} flatShading />
                </mesh>
              </group>
              <group>
                <mesh
                  rotation-x={THREE.MathUtils.degToRad(-90)}
                  position={[2.5, 7.7, 14.5]}
                  receiveShadow
                >
                  <planeGeometry args={[0.7, 0.7, 1]} />
                  <meshLambertMaterial color={0xffffff} flatShading />
                </mesh>
                <mesh
                  position={[3, 7.6, 14]}
                  rotation-x={THREE.MathUtils.degToRad(-90)}
                  receiveShadow
                >
                  <planeGeometry args={[2.5, 2.5, 2]} />
                  <meshLambertMaterial color={0x444444} flatShading />
                </mesh>
              </group>
            </group>
            {/* 주둥이 */}
            <group>
              <mesh position={[0, 8.5, 10]} castShadow receiveShadow>
                <boxGeometry args={[6, 3, 2]} />
                <meshLambertMaterial color={0xffff00} flatShading />
              </mesh>
              <mesh position={[0, 8.5, 7]} castShadow receiveShadow>
                <boxGeometry args={[6, 3, 2]} />
                <meshLambertMaterial color={0xffff00} flatShading />
              </mesh>
              <mesh position={[0, 8.2, 5.3]} castShadow receiveShadow>
                <boxGeometry args={[2, 1.5, 1.5]} />
                <meshLambertMaterial color={0xf0619a} flatShading />
              </mesh>
            </group>
          </group>
          <DirectionalLight ref={lightRef} />
        </group>
      </Bounds>
    </>
  );
}

export default Player;
