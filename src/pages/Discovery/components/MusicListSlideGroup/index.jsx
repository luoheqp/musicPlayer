import React, { useEffect, useState } from "react";

import { MusicListSlideGroupContent, MusicList } from "./style";

// components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

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
      <p className="title">{title}</p>

      <Swiper
        className="music-list-swiper-content"
        spaceBetween={10}
        slidesPerView={1.1}
      >
        {musicGroup?.map((item) => (
          <SwiperSlide className="swiper-item" key={item.id}>
            <MusicList>
              {item?.map((item) => (
                <div className="music-list-item">
                  <div className="cover">
                    <img src={`${item.album.picUrl}?param=100y100`} alt="" />
                  </div>
                  <div className="desc">
                    <p className="name">{item.name}</p>
                    <p className="other">{item.alias?.join(" / ")}</p>
                  </div>
                  <div className="play"></div>
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
