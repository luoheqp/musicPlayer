import React from "react";
import { SlidePopContent } from "./style";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SlidePop = ({ title, close }) => {
  const songList = useSelector(({ common }) => common.songList);

  useEffect(() => {
    console.log(songList);
  }, [songList]);

  return (
    <SlidePopContent onClick={close}>
      <div className="main">
        <h3 className="title">{title}</h3>
        <div className="list-content">
          {songList?.map((item) => (
            <div className="item">
              <img src={item.coverImgUrl} alt="" />
            </div>
          ))}
        </div>
      </div>
    </SlidePopContent>
  );
};

export default SlidePop;
