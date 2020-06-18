import React, { useState, useRef, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSetMediaPlayNow,
  handleSetMediaDuration,
  handleSetMediaCurrentTime,
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

  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();

  // 更改当前歌曲 => 上一首 / 下一首
  const handleChangeCurrentSong = useCallback(
    (difference) => {
      let { listPos } = mediaPlayNow;

      let len = listData.length;
      listPos += difference;

      if (listPos < 0) {
        listPos = len - 1;
      }

      if (listPos >= len) {
        listPos = 0;
      }

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
    dispatch(handleSetMediaDuration(audioRef.current.duration));
    audioRef.current.play();
  };

  // audio timeupdate event
  const handleRefreshProgress = () => {
    let { currentTime } = audioRef.current;
    dispatch(handleSetMediaCurrentTime(currentTime));
  };

  // 同步 store 中的 currentTime 修改
  useEffect(() => {
    audioRef.current.currentTime = changeCurrentTime;
  }, [changeCurrentTime]);

  return (
    <>
      <audio
        src={`./music/${mediaPlayNow.fullName}`}
        ref={audioRef}
        onCanPlay={handleAudioCanPlay}
        onTimeUpdate={handleRefreshProgress}
        onEnded={() => handleChangeCurrentSong(1)}
      ></audio>
      <MiniPlayerContent>
        <div className="control-area">
          <PlayerCycleControl value="循环" onClick={handleChangePlayerCycleState} />
          <PlayerStateControl>
            <input
              type="button"
              value="上一首"
              className="btn pre"
              onClick={() => handleChangeCurrentSong(-1)}
            />
            <input
              type="button"
              value="暂停"
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
        </div>
        <MusicProgressContent>
          <MusicProgress />
        </MusicProgressContent>
      </MiniPlayerContent>
    </>
  );
};

export default MiniPlayer;
