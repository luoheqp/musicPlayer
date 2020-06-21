import React from "react";
import { PlayerContent } from "./style";
import CanvasGuy from "./components/CanvasGuy";
const Player = (props) => {
  return (
    <PlayerContent>
      <CanvasGuy />
    </PlayerContent>
  );
};

export default Player;
