import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSetMediaPlayNow } from "@r/player";
import { List, ListItem } from "./style";

const SongList = (props) => {
  // state
  const dispatch = useDispatch();
  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);
  const listData = useSelector(({ common }) => common.musicList);

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
