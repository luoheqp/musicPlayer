import React, { useEffect, useState, useRef } from "react";
import fakeData from "@/config/fakeData.js";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { handleSetMusicList } from "@r/common";
import { handleSetMediaPlayNow } from "@r/player";
import {
  IndexContent,
  Header,
  ListContent,
  ListItem,
  PlayerContent,
} from "./style";

const Index = (props) => {
  // store
  const dispatch = useDispatch();
  const listData = useSelector(({ common }) => common.musicList);
  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);

  // data
  const [playerSrc, setPlayerSrc] = useState("");
  const audioTarget = useRef();

  // action
  const handleGetSongPathById = (id) => {
    return fakeData.filter((item) => item.id === id)[0];
  };

  const handleRefreshMediaNowPlay = (data) => {
    dispatch(handleSetMediaPlayNow(data));
  };

  // methods
  const handlePlayThisSong = (id) => {
    let targetObj = handleGetSongPathById(id);
    let path = `./music/${targetObj.fullName}`;
    setPlayerSrc(path);
    handleRefreshMediaNowPlay(targetObj);
  };

  const handleChangeCurrentSong = (difference) => {
    let { listPos } = mediaPlayNow;
    listPos += difference;

    if (listPos < 0 || listPos > listData.length) {
      return;
    }

    handlePlayThisSong(listData[listPos].id);
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
        {listData.map((item) => (
          <ListItem
            className={`${mediaPlayNow.id === item.id ? "playing" : ""}`}
            key={item.id}
            onClick={() => handlePlayThisSong(item.id)}
          >
            {item.name}
          </ListItem>
        ))}
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
        <audio src={playerSrc} ref={audioTarget}></audio>
      </PlayerContent>
    </IndexContent>
  );
};

export default Index;
