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

const Hello = ({ changeTab }) => {
  const { LoadingDom, toggleLoading } = useLoading(false);

  const dispatch = useDispatch();
  const songCatList = useSelector(({ common }) => common.songCatList);

  const [isSelectCat, setIsSelectCat] = useState(false);
  const [activeCat, setActiveCat] = useState("");

  const getSongListInThisCat = async (name) => {
    setActiveCat(name);
    try {
      toggleLoading();
      await dispatch(handleGetSongList(name));
    } catch (e) {}
    toggleLoading();
    setIsSelectCat(true);
  };

  const handleUpdateSongList = async (id) => {
    toggleLoading();
    await dispatch(handleSetMusicList(id));
    toggleLoading();
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

      <SlidePop
        title={activeCat}
        state={isSelectCat}
        close={() => setIsSelectCat(false)}
        clickTrigger={handleUpdateSongList}
      />

      {LoadingDom}
    </HelloContent>
  );
};

export default Hello;
