import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSetMediaPlayNow } from "@r/player";
import { MiniPlayerContent, ControllerGroup, MusicProgress } from "./style";

const MiniPlayer = () => {
  const dispatch = useDispatch();
  const listData = useSelector(({ common }) => common.musicList);
  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);

  const [progress, setProgress] = useState(0);

  const audioTarget = useRef();

  // 更改当前歌曲 => 上一首 / 下一首
  const handleChangeCurrentSong = useCallback(
    (difference) => {
      debugger;
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
    const { current } = audioTarget;

    // 判断当前是否有歌曲选中
    if (!current.currentSrc) {
      return;
    }

    if (current.paused) {
      current.play();
    } else {
      current.pause();
    }
  };

  const initPlayer = useCallback(() => {
    const { current } = audioTarget;

    // 加载完后自动播放
    current.addEventListener("canplay", () => {
      const { duration } = current;

      current.addEventListener("timeupdate", () => {
        let { currentTime } = current;
        setProgress(Number((currentTime / duration) * 100).toFixed());
      });

      current.addEventListener("ended", () => {
        handleChangeCurrentSong(1);
      });

      current.play();
    });
  }, [handleChangeCurrentSong]);

  useEffect(() => {
    initPlayer();
  }, [initPlayer]);

  return (
    <MiniPlayerContent>
      <audio src={`./music/${mediaPlayNow.fullName}`} ref={audioTarget}></audio>
      <ControllerGroup>
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
      </ControllerGroup>
      <MusicProgress progress={progress}>
        <div className="move-point"></div>
      </MusicProgress>
    </MiniPlayerContent>
  );
};

export default MiniPlayer;
