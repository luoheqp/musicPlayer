import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleSetMusicList } from "@r/common";
import { IndexContent, Header, ListContent, PlayerContent } from "./style";

// components
import SongList from "./components/SongList";
import MiniPlayer from "./components/MiniPlayer";

const Index = (props) => {
  // store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleSetMusicList());
  }, [dispatch]);

  return (
    <IndexContent>
      {/* header */}
      <Header>
        <h3>Hello.</h3>
      </Header>

      {/* list */}
      <ListContent>
        <SongList />
      </ListContent>

      {/* player */}
      <PlayerContent>
        <MiniPlayer />
      </PlayerContent>
    </IndexContent>
  );
};

export default Index;
