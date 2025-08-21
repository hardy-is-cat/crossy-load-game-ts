import { maxTileIndex, minTileIndex } from "../constants";
import useMapStore from "../stores/map";
// import { rows } from "../metadata";
import { PlayerMoveDirection } from "../types";
import calcFinalPosition from "./calcFinalPosition";

function endsUpInValidPosition(
  currentPosition: { rowIndex: number; tileIndex: number },
  moves: PlayerMoveDirection[]
) {
  const finalPosition = calcFinalPosition(currentPosition, moves);

  if (
    finalPosition.rowIndex === -1 ||
    finalPosition.tileIndex === maxTileIndex + 1 ||
    finalPosition.tileIndex === minTileIndex - 1
  ) {
    return false;
  }

  // 이동 후 player가 올라가있을 row를 찾음
  const finalRow = useMapStore.getState().rows[finalPosition.rowIndex - 1];

  if (
    finalRow &&
    finalRow.type === "forest" &&
    // 최종 row 내에서 player의 tileIndex가 tree가 존재중인 tileIndex일 경우
    // 처음에 filter를 썼는데 filter는 충족되는 조건이 없어도 빈배열이 반환된다.
    // 그런데 빈 배열은 truthy 값으로 생각대로 작동하지 않음.
    // some은 boolean 값을 반환하므로 some이 적당하다.
    finalRow.trees.some((tree) => tree.tileIndex === finalPosition.tileIndex)
  ) {
    return false;
  }

  return true;
}

export default endsUpInValidPosition;
