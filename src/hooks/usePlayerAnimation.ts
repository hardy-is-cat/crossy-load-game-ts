import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { state, stepCompleted } from "../stores/player";
import { tileSize } from "../constants";

function usePlayerAnimation(ref: React.RefObject<THREE.Group | null>) {
  const moveClock = new THREE.Clock(false);

  useFrame(() => {
    if (!ref.current) return;
    if (!state.movesQueue.length) return;

    const player = ref.current;

    if (!moveClock.running) moveClock.start();

    // 한 걸음 당 움직이는 시간
    const STEP_TIME = 0.2;
    // moveClock.getElapsedTime()은 시계가 시작된 후 지난 시간을 반환한다
    // 이것을 STEP_TIME으로 나누면 0 ~ 1의 값이 나오는데 이게 걸음의 진행률.
    const progress = Math.min(1, moveClock.getElapsedTime() / STEP_TIME);

    setPosition(player, progress);
    setRotation(player, progress);

    if (progress >= 1) {
      stepCompleted();
      moveClock.stop();
    }
  });
}

function setPosition(player: THREE.Group, progress: number) {
  const startX = state.currentTile * tileSize;
  const startY = state.currentRow * tileSize;
  let endX = startX;
  let endY = startY;

  if (state.movesQueue[0] === "forward") endY += tileSize;
  if (state.movesQueue[0] === "backward") endY -= tileSize;
  if (state.movesQueue[0] === "left") endX -= tileSize;
  if (state.movesQueue[0] === "right") endX += tileSize;

  player.position.x = THREE.MathUtils.lerp(startX, endX, progress);
  player.position.y = THREE.MathUtils.lerp(startY, endY, progress);
  // 플레이어가 이동할 때 playerRef의 가장 바깥쪽 그룹을 움직이지만
  // 동시에 점프와 회전은 안쪽의 그룹만을 움직이게 해야 함
  player.children[0].position.z = Math.sin(progress * Math.PI) * 8;
}

function setRotation(player: THREE.Group, progress: number) {
  let endRotation = 0;

  if (state.movesQueue[0] === "forward") endRotation = 0;
  if (state.movesQueue[0] === "backward") endRotation = Math.PI;
  if (state.movesQueue[0] === "left") endRotation = Math.PI / 2;
  if (state.movesQueue[0] === "right") endRotation = -Math.PI / 2;

  player.children[0].rotation.z = THREE.MathUtils.lerp(
    player.children[0].rotation.z,
    endRotation,
    progress
  );
}

export default usePlayerAnimation;
