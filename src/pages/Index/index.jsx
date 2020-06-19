import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleSetMusicList } from "@r/common";
import { IndexContent, Header, ListContent, PlayerContent } from "./style";

// components
import SongList from "./components/SongList";
import MiniPlayer from "./components/MiniPlayer";
import { useState } from "react";

const HEADER_ITEM_LIST = ["Hello.", "Player.", "Mine."];

const Index = (props) => {
  // store
  const dispatch = useDispatch();

  const [activeHeader, setActiveHeader] = useState(0);

  const handleChangeActiveHeaderItem = ({ target }) => {
    const { sign } = target.dataset;
    if (sign) {
      setActiveHeader(sign);
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
