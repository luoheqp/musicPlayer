import React, { useEffect } from "react";
import fakeData from "@/config/fakeData.js";
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
    dispatch(handleSetMusicList(fakeData));
  }, [dispatch]);

  return (
    <IndexContent>
      <Header>
        <h3>Hello.</h3>
      </Header>
      <ListContent>
        <SongList />
      </ListContent>
      <PlayerContent>
        <MiniPlayer />
      </PlayerContent>
    </IndexContent>
  );
};

export default Index;
