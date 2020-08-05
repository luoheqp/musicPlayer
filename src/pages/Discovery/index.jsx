import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetRecommendedPlaylist } from "@r/common";

import { DiscoveryContent } from "./style";

// components
import SongListSlideGroup from "./components/SongListSlideGroup";

const Discovery = (props) => {
  const dispatch = useDispatch();

  const recommendedPlaylist = useSelector(
    ({ common }) => common.recommendedPlaylist
  );

  useEffect(() => {
    dispatch(handleGetRecommendedPlaylist());
  }, [dispatch]);

  return (
    <DiscoveryContent>
      <SongListSlideGroup
        title="Recommended playlist"
        playList={recommendedPlaylist}
      />
    </DiscoveryContent>
  );
};

export default Discovery;
