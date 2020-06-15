import React, { useEffect, useState, useRef } from "react";
import fakeData from "@/config/fakeData.js";
import { useDispatch, useSelector } from "react-redux";
import { handleSetMusicList } from "@r/common";
import { IndexContent, Header, ListContent, PlayerContent } from "./style";

// components
import SongList from "./components/SongList";

const Index = (props) => {
  // store
  const dispatch = useDispatch();
  const listData = useSelector(({ common }) => common.musicList);
  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);

  // data
  const audioTarget = useRef();

  const handleChangeCurrentSong = (difference) => {
    let { listPos } = mediaPlayNow;
    listPos += difference;

    if (listPos < 0 || listPos > listData.length) {
      return;
    }

    // handlePlayThisSong(listData[listPos].id);
  };

  const togglePlayerState = () => {
    const { current } = audioTarget;

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
    // 绑定 audio 相关触发事件
    audioTarget.current.addEventListener("canplay", (e) => {
      audioTarget.current.play();
    });
  };

  useEffect(() => {
    // 初始化列表数据
    dispatch(handleSetMusicList(fakeData));

    initPlayer();
  }, []);

  return (
    <IndexContent>
      <Header>
        <h3>Hello.</h3>
      </Header>
      <ListContent>
        <SongList />
      </ListContent>
      <PlayerContent>
        <input
          type="button"
          value=""
          onClick={() => handleChangeCurrentSong(-1)}
        />
        <input type="button" value="" onClick={togglePlayerState} />
        <input
          type="button"
          value=""
          onClick={() => handleChangeCurrentSong(1)}
        />
        <audio src={`./music/${mediaPlayNow}`} ref={audioTarget}></audio>
      </PlayerContent>
    </IndexContent>
  );
};

export default Index;
