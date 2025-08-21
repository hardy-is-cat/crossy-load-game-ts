import useEventListeners from "../hooks/useEventListeners";
import { queueMove } from "../stores/player";
import "./Controls.css";

function Controls() {
  useEventListeners();

  return (
    <div id="controls">
      <div>
        <button type="button" onClick={() => queueMove("forward")}>
          ▲
        </button>
        <button type="button" onClick={() => queueMove("left")}>
          ◀
        </button>
        <button type="button" onClick={() => queueMove("backward")}>
          ▼
        </button>
        <button type="button" onClick={() => queueMove("right")}>
          ▶
        </button>
      </div>
    </div>
  );
}

export default Controls;
