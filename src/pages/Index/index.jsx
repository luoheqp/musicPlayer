import React, { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { handleSetMusicList } from "@r/common";
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

const HEADER_ITEM_LIST = ["Hello.", "List.", "Player.", "Mine."];

const Index = (props) => {
  // store
  const dispatch = useDispatch();

  const [activeHeader, setActiveHeader] = useState(0);

  const handleChangeActiveHeaderItem = ({ target }) => {
    const { sign } = target.dataset;
    if (sign) {
      setActiveHeader(+sign);
    }
  };

  useEffect(() => {
    dispatch(handleSetMusicList());
  }, [dispatch]);

  return (
    <IndexContent>
      {/* header */}
      <Header onClick={handleChangeActiveHeaderItem}>
        {HEADER_ITEM_LIST.map((item, index) => (
          <h3
            className={`item ${+activeHeader === index ? "active" : ""}`}
            data-sign={index}
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
                <Hello />
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
              <MineContent>mine</MineContent>
            </SlideContent>
          );
        }}
      </Transition>

      {/* player */}
      <Transition in={!activeHeader} timeout={0}>
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
