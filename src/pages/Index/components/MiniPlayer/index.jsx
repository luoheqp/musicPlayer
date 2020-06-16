import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetMediaPlayNow } from "@r/player";
import { MiniPlayerContent, ControllerGroup, MusicProgress } from "./style";

const MiniPlayer = () => {
  const dispatch = useDispatch();
  const listData = useSelector(({ common }) => common.musicList, shallowEqual);
  const mediaPlayNow = useSelector(
    ({ player }) => player.mediaPlayNow,
    shallowEqual
  );

  const [progress, setProgress] = useState(0);

  const audioTarget = useRef();

  // 更改当前歌曲 => 上一首 / 下一首
  const handleChangeCurrentSong = (difference) => {
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
  };

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

  const initPlayer = () => {
    const { current } = audioTarget;

    // 加载完后自动播放
    current.addEventListener("canplay", (e) => {
      const { duration } = current;

      current.addEventListener("timeupdate", (e) => {
        let { currentTime } = current;
        setProgress(Number((currentTime / duration) * 100).toFixed());
      });

      current.addEventListener("ended", (e) => {
        handleChangeCurrentSong(1);
      });

      current.play();
    });
  };

  useEffect(() => {
    initPlayer();
  }, []);

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
