import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSetMediaPlayNow, handleChangePlayState } from "@r/player/action";
import { SongListContent, CoverList, List, ListItem } from "./style";

// components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

const SongList = (props) => {
  // state
  const dispatch = useDispatch();

  const listData = useSelector(({ common }) => common.musicList);
  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);

  // data
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [swiperActive, setSwiperActive] = useState(0);

  // action
  const handleGetSongPathById = (id) => {
    return listData.filter((item) => item.id === id)[0];
  };

  const handleRefreshMediaNowPlay = (data) => {
    dispatch(handleSetMediaPlayNow(data));
  };

  // methods
  const handlePlayThisSong = (id) => {
    let targetObj = handleGetSongPathById(id);
    swiperInstance.slideTo(targetObj.listPos, 300);
    handleRefreshMediaNowPlay(targetObj);
    dispatch(handleChangePlayState(true));
  };

  const handleOnSlideChange = (realIndex) => {
    setSwiperActive(realIndex);
  };

  useEffect(() => {
    console.log("effect");
    listData[swiperActive] && handlePlayThisSong(listData[swiperActive].id);
  }, [swiperActive]);

  return (
    <SongListContent>
      <CoverList>
        <Swiper
          className="swiper-wrap"
          slidesPerView="auto"
          slideToClickedSlide={true}
          onSlideChange={({ realIndex }) => handleOnSlideChange(realIndex)}
          onSwiper={(swiperInstance) => {
            setSwiperInstance(swiperInstance);
          }}
        >
          {listData?.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.picUrl} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </CoverList>
      <List>
        <div className="list-wrap">
          {listData.map((item) => (
            <ListItem
              className={`${mediaPlayNow.id === item.id ? "playing" : ""}`}
              key={item.id}
              onClick={() => handlePlayThisSong(item.id)}
            >
              {item.name}
            </ListItem>
          ))}
        </div>
      </List>
    </SongListContent>
  );
};

export default SongList;
