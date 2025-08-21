import "./Game.css";

import Map from "./components/Map";
import Player from "./components/Player";
import Scene from "./components/Scene";
import Controls from "./components/Controls";
import Score from "./components/Score";
import Result from "./components/Result";

function Game() {
  return (
    <div className="game">
      <Scene>
        <Player />
        <Map />
      </Scene>
      <Score />
      <Result />
      <Controls />
    </div>
  );
}

export default Game;
