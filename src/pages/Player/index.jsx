import React, { useState } from "react";
import { PlayerContent, EffectBox, LyricBox } from "./style";
import { useSelector } from "react-redux";

// components
import CanvasGuy from "./components/CanvasGuy";
import LyricGuy from "./components/LyricGuy";

const Player = (props) => {
  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);

  const [isEffectBoxShow, setIsEffectBoxShow] = useState(true);

  const handleToggleEffectBox = () => {
    setIsEffectBoxShow(!isEffectBoxShow);
  };

  return (
    <PlayerContent onClick={handleToggleEffectBox}>
      <EffectBox showState={isEffectBoxShow}>
        <CanvasGuy />
      </EffectBox>
      <LyricBox>
        <LyricGuy songId={mediaPlayNow.id} />
      </LyricBox>
    </PlayerContent>
  );
};

export default Player;
