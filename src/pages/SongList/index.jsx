import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSetMediaPlayNow, handleChangePlayState } from "@r/player/action";
import { List, ListItem } from "./style";

const SongList = (props) => {
  // state
  const dispatch = useDispatch();

  const listData = useSelector(({ common }) => common.musicList);
  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);

  // data

  // action
  const handleGetSongPathById = (id) => {
    return listData.filter((item) => item.id === id)[0];
  };

  const handleRefreshMediaNowPlay = (data) => {
    dispatch(handleSetMediaPlayNow(data));
  };

  // methods
  const handlePlayThisSong = (id) => {
    let targetObj = handleGetSongPathById(id);
    handleRefreshMediaNowPlay(targetObj);
    dispatch(handleChangePlayState(true));
  };

  return (
    <List>
      {listData.map((item) => (
        <ListItem
          className={`${mediaPlayNow.id === item.id ? "playing" : ""}`}
          key={item.id}
          onClick={() => handlePlayThisSong(item.id)}
        >
          {item.name}
        </ListItem>
      ))}
    </List>
  );
};

export default SongList;
