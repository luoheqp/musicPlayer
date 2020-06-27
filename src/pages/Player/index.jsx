import React from "react";
import { PlayerContent, EffectBox, LyricBox } from "./style";
import { useSelector } from "react-redux";

// components
import CanvasGuy from "./components/CanvasGuy";
import LyricGuy from "./components/LyricGuy";

const Player = (props) => {
  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);

  return (
    <PlayerContent>
      <EffectBox>
        <CanvasGuy />
      </EffectBox>
      <LyricBox>
        <LyricGuy songId={mediaPlayNow.id} />
      </LyricBox>
    </PlayerContent>
  );
};

export default Player;
