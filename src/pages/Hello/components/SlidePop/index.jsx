import React from "react";
import { SlidePopContent, SongCollectList } from "./style";
import { useSelector } from "react-redux";

// components
import { Transition } from "react-transition-group";

const SlidePop = ({ title, state, close, clickTrigger }) => {
  const songList = useSelector(({ common }) => common.songList);

  const handleOnClick = (item) => {
    clickTrigger(item.id);
    close();
  };

  return (
    <Transition in={state} timeout={300}>
      {(value) =>
        value !== "exited" && (
          <SlidePopContent onClick={close} state={value}>
            <div className={`main ${value}`}>
              <h3 className="title">{title}</h3>
              <SongCollectList>
                {songList?.map((item) => (
                  <div
                    className="item"
                    key={item.id}
                    onClick={() => handleOnClick(item)}
                  >
                    <img src={`${item.coverImgUrl}?param=200y200`} alt="" />
                    <p className="name">{item.name}</p>
                  </div>
                ))}
              </SongCollectList>
            </div>
          </SlidePopContent>
        )
      }
    </Transition>
  );
};

export default SlidePop;
