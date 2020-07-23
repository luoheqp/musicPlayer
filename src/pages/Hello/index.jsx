import React, { useEffect, useState } from "react";
import { HelloContent } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSetMusicList,
  handleGetSongCatList,
  handleGetSongList,
} from "@r/common";

// hooks
import useLoading from "@/hooks/useLoading";

// components
import SlidePop from "./components/SlidePop";
import { Transition } from "react-transition-group";

const Hello = ({ changeTab }) => {
  const [LoadingDom, loadingState, toggleLoading] = useLoading(true);

  const dispatch = useDispatch();
  const songCatList = useSelector(({ common }) => common.songCatList);

  const [isSelectCat, setIsSelectCat] = useState(false);
  const [activeCat, setActiveCat] = useState("");

  const getSongListInThisCat = async (name) => {
    setActiveCat(name);
    await dispatch(handleGetSongList(name));
    setIsSelectCat(true);
  };

  const handleUpdateSongList = async (id) => {
    dispatch(handleSetMusicList(id));
    changeTab(1);
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

      <Transition in={isSelectCat} timeout={300}>
        {(value) => (
          <SlidePop
            title={activeCat}
            state={value}
            close={() => setIsSelectCat(false)}
            clickTrigger={handleUpdateSongList}
          />
        )}
      </Transition>

      <input type="button" value="click" onClick={toggleLoading} />

      {LoadingDom}
    </HelloContent>
  );
};

export default Hello;
