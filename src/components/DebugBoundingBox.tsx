import * as THREE from "three";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

function DebugBoundingBox({
  object,
  color = 0xff0000,
}: {
  object: THREE.Object3D;
  color?: THREE.ColorRepresentation;
}) {
  const { scene } = useThree();

  useEffect(() => {
    if (!object) return;

    const box = new THREE.Box3().setFromObject(object);
    const helper = new THREE.Box3Helper(box, color);
    scene.add(helper);

    return () => {
      scene.remove(helper);
    };
  }, [object, color, scene]);

  return null;
}

export default DebugBoundingBox;
