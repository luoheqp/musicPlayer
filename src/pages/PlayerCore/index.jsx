import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangePlayState,
  handleSetMediaSource,
  handleSetMediaPlayNow,
} from "@r/player/action";

import { PlayerCoreContent } from "./style";

const PlayerCore = (props) => {
  const dispatch = useDispatch();

  const audioRef = useRef();
  const [isCanPlay, setIsCanPlay] = useState(false);

  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);
  const playState = useSelector(({ player }) => player.playState);

  const handleAudioEnded = () => {
    handleSetMediaPlayNow({});
    dispatch(handleChangePlayState("ready"));
  };

  useEffect(() => {
    dispatch(handleSetMediaSource(audioRef.current));
  }, [dispatch]);

  const handleOnLoad = () => {
    setIsCanPlay(true);
    if (playState === "playing") {
      audioRef.current.play();
    }
  };

  const handleOnChange = () => {
    setIsCanPlay(false);
  };

  useEffect(() => {
    if (playState === "playing") {
      isCanPlay && audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isCanPlay, playState]);

  return (
    <PlayerCoreContent>
      <audio
        src={mediaPlayNow.url}
        ref={audioRef}
        crossOrigin="anonymous"
        onCanPlay={handleOnLoad}
        onEnded={handleAudioEnded}
        onChange={handleOnChange}
      ></audio>
    </PlayerCoreContent>
  );
};

export default PlayerCore;
