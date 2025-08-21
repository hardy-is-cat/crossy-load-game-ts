import useGameState from "../stores/game";
import "./Score.css";

function Score() {
  const score = useGameState((state) => state.score);

  return <div id="score">{score}</div>;
}

export default Score;
