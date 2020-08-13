import React, { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { handleSetPlayingMusicList } from "@r/common";
import {
  IndexContent,
  Header,
  SlideContent,
  HelloContent,
  ListContent,
  PlayerContent,
  MineContent,
  MiniPlayerContent,
} from "./style";

// components
import MiniPlayer from "./components/MiniPlayer";
import Hello from "@/pages/Hello";
import SongList from "@/pages/SongList";
import Player from "@/pages/Player";
import Mine from "@/pages/Mine";

const HEADER_ITEM_LIST = ["Hello.", "List.", "Player.", "Mine."];

const Index = (props) => {
  // store
  const dispatch = useDispatch();

  const [activeHeader, setActiveHeader] = useState(3);

  const handleChangeActiveHeaderItem = (index) => {
    setActiveHeader(index);
  };

  useEffect(() => {
    dispatch(handleSetPlayingMusicList());
  }, [dispatch]);

  return (
    <IndexContent>
      {/* header */}
      <Header>
        {HEADER_ITEM_LIST.map((item, index) => (
          <h3
            onClick={() => handleChangeActiveHeaderItem(index)}
            className={`item ${+activeHeader === index ? "active" : ""}`}
            key={index}
          >
            {item}
          </h3>
        ))}
      </Header>

      <Transition timeout={0}>
        {(state) => {
          return (
            <SlideContent state={state} active={activeHeader}>
              {/* hello */}
              <HelloContent>
                <Hello changeTab={handleChangeActiveHeaderItem} />
              </HelloContent>

              {/* list */}
              <ListContent>
                <SongList />
              </ListContent>

              {/* player */}
              <PlayerContent>
                <Player />
              </PlayerContent>

              {/* mine */}
              <MineContent>
                <Mine />
              </MineContent>
            </SlideContent>
          );
        }}
      </Transition>

      {/* player */}
      <Transition in={![0, 3].includes(activeHeader)} timeout={0}>
        {(value) => (
          <MiniPlayerContent state={value}>
            <MiniPlayer />
          </MiniPlayerContent>
        )}
      </Transition>
    </IndexContent>
  );
};

export default Index;
