import useGameState from "../stores/game";
import "./Result.css";

function Result() {
  const score = useGameState((state) => state.score);
  const status = useGameState((state) => state.status);
  const resetGame = useGameState((state) => state.resetGame);

  if (status === "running") return null;

  return (
    <div id="result-container">
      <div id="result">
        <h1>Game Over</h1>
        <p>Your Score: {score}</p>
        <button onClick={resetGame}>Retry</button>
      </div>
    </div>
  );
}

export default Result;
