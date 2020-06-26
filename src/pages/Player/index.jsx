import React from "react";
import { PlayerContent, EffectBox, LyricBox } from "./style";

// components
import CanvasGuy from "./components/CanvasGuy";
import LyricGuy from "./components/LyricGuy";

const Player = (props) => {
  return (
    <PlayerContent>
      <EffectBox>
        <CanvasGuy />
      </EffectBox>
      <LyricBox>
        <LyricGuy />
      </LyricBox>
    </PlayerContent>
  );
};

export default Player;
