import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSetMediaPlayNow, handleChangePlayState } from "@r/player/action";
import { SongListContent, List, ListItem } from "./style";

// components
import { useCallback } from "react";

const SongList = (props) => {
  const { listData } = props;

  // state
  const dispatch = useDispatch();

  // const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);

  // action
  // const handleGetSongPathById = useCallback(
  //   (id) => {
  //     return listData.filter((item) => item.id === id)[0];
  //   },
  //   [listData]
  // );

  const handleRefreshMediaNowPlay = useCallback(
    (data) => {
      dispatch(handleSetMediaPlayNow(data));
    },
    [dispatch]
  );

  // methods
  const handlePlayThisSong = useCallback(
    (id) => {
      // let targetObj = handleGetSongPathById(id);
      // handleRefreshMediaNowPlay(targetObj);
      // dispatch(handleChangePlayState('playing'));
    },
    // [dispatch, handleGetSongPathById, handleRefreshMediaNowPlay]
  );

  return (
    <SongListContent>
      <List>
        <div className="list-wrap">
          {listData.songList?.map((item) => (
            <ListItem
              // className={`${mediaPlayNow.id === item.id ? "playing" : ""}`}
              key={item.id}
              onClick={() => handlePlayThisSong(item.id)}
            >
              {item.name}
            </ListItem>
          ))}
        </div>
      </List>
    </SongListContent>
  );
};

export default SongList;
