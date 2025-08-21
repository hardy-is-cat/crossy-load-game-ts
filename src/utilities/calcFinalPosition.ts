import { PlayerMoveDirection } from "../types";

function calcFinalPosition(
  currentPosition: { rowIndex: number; tileIndex: number },
  moves: PlayerMoveDirection[]
) {
  // 현재 위치를 기준으로 이동 후의 위치를 계산함
  return moves.reduce((position, direction) => {
    if (direction === "forward")
      return { rowIndex: position.rowIndex + 1, tileIndex: position.tileIndex };
    if (direction === "backward")
      return { rowIndex: position.rowIndex - 1, tileIndex: position.tileIndex };
    if (direction === "right")
      return { rowIndex: position.rowIndex, tileIndex: position.tileIndex + 1 };
    if (direction === "left")
      return { rowIndex: position.rowIndex, tileIndex: position.tileIndex - 1 };
    return position;
  }, currentPosition);
}

export default calcFinalPosition;
