import { Canvas } from "@react-three/fiber";

function Scene({ children }: { children: React.ReactNode }) {
  return (
    <Canvas
      orthographic={true}
      camera={{
        up: [0, 0, 1],
        position: [300, -300, 300],
      }}
      shadows={true}
    >
      <ambientLight />
      {children}
    </Canvas>
  );
}

export default Scene;
