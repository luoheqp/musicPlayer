import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetRecommendedPlaylist,
  handleGetNewMusiclistByArea,
} from "@r/common";

import { DiscoveryContent } from "./style";

// components
import SongListSlideGroup from "./components/SongListSlideGroup";
import MusicListSlideGroup from "./components/MusicListSlideGroup";

const Discovery = (props) => {
  const dispatch = useDispatch();

  const recommendedPlaylist = useSelector(
    ({ common }) => common.recommendedPlaylist
  );
  const newMusicList = useSelector(({ common }) => common.newMusicList);

  useEffect(() => {
    dispatch(handleGetRecommendedPlaylist());
    dispatch(handleGetNewMusiclistByArea({}));
  }, [dispatch]);

  return (
    <DiscoveryContent>
      {recommendedPlaylist.length ? (
        <SongListSlideGroup
          title="Recommended play list"
          playList={recommendedPlaylist}
        />
      ) : null}
      
      {newMusicList.length ? (
        <MusicListSlideGroup title="New music list" musicList={newMusicList} />
      ) : null}
    </DiscoveryContent>
  );
};

export default Discovery;
