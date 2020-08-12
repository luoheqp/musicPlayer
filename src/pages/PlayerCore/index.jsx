import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSetMediaSource } from "@r/player/action";

import { PlayerCoreContent } from "./style";

const PlayerCore = (props) => {
  const dispatch = useDispatch();

  const audioRef = useRef();

  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);
  const playState = useSelector(({ player }) => player.playState);

  const handleAudioEnded = () => {};

  useEffect(() => {
    dispatch(handleSetMediaSource(audioRef.current));
  }, [dispatch]);

  useEffect(() => {
    if (playState === "playing") {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playState]);

  return (
    <PlayerCoreContent>
      <audio
        src={mediaPlayNow.url}
        ref={audioRef}
        crossOrigin="anonymous"
        onEnded={handleAudioEnded}
      ></audio>
    </PlayerCoreContent>
  );
};

export default PlayerCore;
