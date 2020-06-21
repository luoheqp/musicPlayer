import React, { useState, useRef, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CYCLE_MODE_LIST } from "@/config/playerConfig";
import {
  handleSetMediaPlayNow,
  handleSetMediaDuration,
  handleSetMediaSource,
  handleSetMediaCurrentTime,
  handleChangeMediaCycleMode,
  handleChangeMediaMuteState,
} from "@r/player";
import {
  MiniPlayerContent,
  PlayerStateControl,
  MusicProgressContent,
  PlayerCycleControl,
} from "./style";

// components
import MusicProgress from "@/pages/Index/components/MusicProgress";

const MiniPlayer = () => {
  const dispatch = useDispatch();
  const listData = useSelector(({ common }) => common.musicList);
  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);
  const changeCurrentTime = useSelector(
    ({ player }) => player.changeCurrentTime
  );
  const cycleMode = useSelector(({ player }) => player.cycleMode);
  const muteState = useSelector(({ player }) => player.muteState);

  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();

  // 更改当前歌曲 => 上一首 / 下一首
  const handleChangeCurrentSong = useCallback(
    (difference) => {
      let { listPos = 0 } = mediaPlayNow;

      let len = listData.length;
      listPos += difference;

      if (listPos < 0) {
        listPos = len - 1;
      }

      if (listPos >= len) {
        listPos = 0;
      }

      setIsPlaying(true);
      dispatch(handleSetMediaPlayNow(listData[listPos]));
    },
    [dispatch, listData, mediaPlayNow]
  );

  // 更改当前播放状态 => 暂停 / 开始
  const togglePlayerState = () => {
    const { current } = audioRef;

    // 判断当前是否有歌曲选中
    if (!mediaPlayNow.name) {
      setIsPlaying(true);
      dispatch(handleSetMediaPlayNow(listData[0]));
      return;
    }

    if (current.paused) {
      current.play();
    } else {
      current.pause();
    }

    setIsPlaying(!current.paused);
  };

  // audio canplay event
  const handleAudioCanPlay = () => {
    dispatch(handleSetMediaSource(audioRef.current));
    dispatch(handleSetMediaDuration(audioRef.current.duration));
    audioRef.current.play();
  };

  // audio timeupdate event
  const handleRefreshProgress = () => {
    let { currentTime } = audioRef.current;
    dispatch(handleSetMediaCurrentTime(currentTime));
  };

  // audio ended event
  const handleAudioEnded = () => {
    // 单曲
    if (cycleMode === 1) {
      audioRef.current.currentTime = 0;
      return;
    }

    handleChangeCurrentSong(1);
  };

  // 切换播放循环状态
  const handleChangePlayerCycleState = () => {
    dispatch(handleChangeMediaCycleMode());
  };

  const handleChangePlayerMuteState = () => {
    dispatch(handleChangeMediaMuteState());
  };

  // 同步 store 中的 currentTime 修改
  useEffect(() => {
    audioRef.current.currentTime = changeCurrentTime;
  }, [changeCurrentTime]);

  useEffect(() => {
    audioRef.current.muted = muteState;
  }, [muteState]);

  return (
    <>
      <audio
        src={`./music/${mediaPlayNow.fullName}`}
        ref={audioRef}
        onCanPlay={handleAudioCanPlay}
        onTimeUpdate={handleRefreshProgress}
        onEnded={handleAudioEnded}
      ></audio>
      <MiniPlayerContent>
        <div className="control-area">
          <PlayerCycleControl
            value={CYCLE_MODE_LIST[cycleMode]}
            onClick={handleChangePlayerCycleState}
          />
          <PlayerStateControl>
            <input
              type="button"
              value="上一首"
              className="btn pre"
              onClick={() => handleChangeCurrentSong(-1)}
            />
            <input
              type="button"
              value={isPlaying ? "暂停" : "播放"}
              className="btn state"
              onClick={togglePlayerState}
            />
            <input
              type="button"
              value="下一首"
              className="btn next"
              onClick={() => handleChangeCurrentSong(1)}
            />
          </PlayerStateControl>
          <PlayerCycleControl
            value={muteState ? "恢复" : "静音"}
            onClick={handleChangePlayerMuteState}
          />
        </div>
        <MusicProgressContent>
          <MusicProgress />
        </MusicProgressContent>
      </MiniPlayerContent>
    </>
  );
};

export default MiniPlayer;
