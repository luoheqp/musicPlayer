import React, { useEffect, useState } from "react";

import { MusicListSlideGroupContent, MusicList } from "./style";

// components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Title from "../Title";

const MusicListSlideGroup = (props) => {
  const { title, musicList } = props;

  const [musicGroup, setMusicGroup] = useState([]);
  useEffect(() => {
    let tempList = JSON.parse(JSON.stringify(musicList));
    let temp = [];

    while (tempList.length) {
      temp.push(tempList.splice(0, 5));
    }

    setMusicGroup(temp);
  }, [musicList]);

  return (
    <MusicListSlideGroupContent>
      <Title title={title} />

      <Swiper
        className="music-list-swiper-content"
        spaceBetween={10}
        slidesPerView={1.1}
      >
        {musicGroup?.map((item, index) => (
          <SwiperSlide className="swiper-item" key={index}>
            <MusicList>
              {item?.map((music) => (
                <div className="music-list-item" key={music.id}>
                  <div className="cover">
                    <img src={`${music.album.picUrl}?param=100y100`} alt="" />
                  </div>
                  <div className="desc">
                    <p className="name">{music.name}</p>
                    <p className="other">{music.alias?.join(" / ")}</p>
                  </div>
                  <div className="play">
                    <i className="iconfont icon-play"></i>
                  </div>
                </div>
              ))}
            </MusicList>
          </SwiperSlide>
        ))}
      </Swiper>
    </MusicListSlideGroupContent>
  );
};

export default MusicListSlideGroup;
