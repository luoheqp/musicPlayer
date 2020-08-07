import React from "react";

import { SongListSlideGroupContent, PlayListItem } from "./style";

// components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Title from "../Title";

const SongListSlideGroup = (props) => {
  const { title, playList } = props;

  const handleReduceNumber = (number) => {
    if (number < 1000) {
      return number;
    }

    if (number >= 1000 && number < 10000) {
      return `${Number(number / 1000).toFixed(0)}千`;
    }

    if (number >= 10000) {
      return `${Number(number / 10000).toFixed(0)}万`;
    }

    return number;
  };

  return (
    <SongListSlideGroupContent>
      <Title title={title} />

      <Swiper
        className="song-list-swiper-content"
        spaceBetween={10}
        slidesPerView={3.3}
      >
        {playList?.map((item) => (
          <SwiperSlide className="swiper-item" key={item.id}>
            <PlayListItem>
              <div className="cover-box">
                <img src={item.picUrl} alt="" />
                <span className="play-count">
                  <i className="iconfont icon-3209257-controllaunchplaystarttriangle"></i>
                  {handleReduceNumber(item.playCount)}
                </span>
                <span className="disk-count">
                  <i className="iconfont icon-Disk"></i>
                  {item.trackCount}
                </span>
              </div>
              <p className="name">{item.name}</p>
            </PlayListItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </SongListSlideGroupContent>
  );
};

export default SongListSlideGroup;
