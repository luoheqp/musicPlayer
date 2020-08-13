import React from "react";
import { SlidePopContent, SongCollectList } from "./style";
import { useSelector } from "react-redux";

// components
import { CSSTransition } from "react-transition-group";

const SlidePop = ({ title, state, close, clickTrigger }) => {
  const songCollectList = useSelector(({ common }) => common.songCollectList);

  const handleOnClick = (item) => {
    clickTrigger(item.id);
    close();
  };

  return (
    <CSSTransition in={state} timeout={300} unmountOnExit={true}>
      {(value) => (
        <SlidePopContent onClick={close} state={value}>
          <div className={`main ${value}`}>
            <h3 className="title">{title}</h3>
            <SongCollectList>
              {songCollectList?.map((item, index) => (
                <div
                  className="item"
                  key={index}
                  onClick={() => handleOnClick(item)}
                >
                  <img src={`${item.coverImgUrl}?param=200y200`} alt="" />
                  <p className="name">{item.name}</p>
                </div>
              ))}
            </SongCollectList>
          </div>
        </SlidePopContent>
      )}
    </CSSTransition>
  );
};

export default SlidePop;
