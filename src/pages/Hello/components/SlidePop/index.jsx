import React from "react";
import { SlidePopContent, SongCollectList } from "./style";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SlidePop = ({ title, state, close }) => {
  const songList = useSelector(({ common }) => common.songList);

  useEffect(() => {
    console.log(songList);
  }, [songList]);

  return (
    <SlidePopContent onClick={close} state={state}>
      <div className="main">
        <h3 className="title">{title}</h3>
        <SongCollectList>
          {songList?.map((item) => (
            <div className="item">
              <img src={`${item.coverImgUrl}?param=200y200`} alt="" />
              <p className="name">{item.name}</p>
            </div>
          ))}
        </SongCollectList>
      </div>
    </SlidePopContent>
  );
};

export default SlidePop;
