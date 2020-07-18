import React, { useEffect, useState } from "react";
import { HelloContent } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { handleGetSongCatList, handleGetSongList } from "@r/common";

// components
import SlidePop from "./components/SlidePop";
import { Transition } from "react-transition-group";

const Hello = (props) => {
  const dispatch = useDispatch();
  const songCatList = useSelector(({ common }) => common.songCatList);

  const [isSelectCat, setIsSelectCat] = useState(false);
  const [activeCat, setActiveCat] = useState("");

  const getSongListInThisCat = async (name) => {
    setActiveCat(name);
    await dispatch(handleGetSongList(name));
    setIsSelectCat(true);
  };

  useEffect(() => {
    dispatch(handleGetSongCatList());
  }, [dispatch]);

  return (
    <HelloContent>
      <ul>
        {songCatList?.map(({ name }, index) => (
          <li
            className="list-item"
            key={index}
            onClick={() => getSongListInThisCat(name)}
          >
            {name}
          </li>
        ))}
      </ul>

      <Transition in={isSelectCat} timeout={0}>
        {(value) => (
          <SlidePop title={activeCat} close={() => setIsSelectCat(false)} />
        )}
      </Transition>
    </HelloContent>
  );
};

export default Hello;
