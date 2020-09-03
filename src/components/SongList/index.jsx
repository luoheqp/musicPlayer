import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSetMediaPlayNow, handleChangePlayState } from "@r/player/action";
import { SongListContent, ListItem } from "./style";

// components
import { useCallback } from "react";

const SongList = (props) => {
  const { listData } = props;

  // state
  const dispatch = useDispatch();

  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);

  // action
  const handleGetSongPathById = useCallback(
    (id) => {
      return listData.filter((item) => item.id === id)[0];
    },
    [listData]
  );

  const handleRefreshMediaNowPlay = useCallback(
    (data) => {
      dispatch(handleSetMediaPlayNow(data));
    },
    [dispatch]
  );

  // methods
  const handlePlayThisSong = useCallback(
    (id) => {
      let targetObj = handleGetSongPathById(id);
      handleRefreshMediaNowPlay(targetObj);
      dispatch(handleChangePlayState("playing"));
    },
    [dispatch, handleGetSongPathById, handleRefreshMediaNowPlay]
  );

  return (
    <SongListContent>
      <div className="list-wrap">
        {listData?.map((item, index) => (
          <ListItem
            className={`${mediaPlayNow.id === item.id ? "playing" : ""}`}
            key={item.id}
            onClick={() => handlePlayThisSong(item.id)}
          >
            <div className="order">{index + 1}</div>
            <div className="info">
              <p>{item.name}</p>
              <p className="other">
                {item.artist}
                {item.about ? ` - ${item.about}` : ""}
              </p>
            </div>
          </ListItem>
        ))}
      </div>
    </SongListContent>
  );
};

export default SongList;
