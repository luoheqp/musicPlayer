import React from "react";
import { handleSetSongCollectInfo } from "@r/common";
import { reduceNumber } from "@/utils";
import useBottomSlidePop from "@/hooks/useBottomSlidePop";
import useLoading from "@/hooks/useLoading";
import { useDispatch, useSelector } from "react-redux";

// components
import { SongListSlideGroupContent, PlayListItem } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import SongCollectPop from "@/components/SongCollectPop";
import "swiper/swiper.scss";
import Title from "../Title";

const SongListSlideGroup = (props) => {
  const dispatch = useDispatch();

  const { title, playList } = props;

  const { BottomSlidePopDom, toggleBottomSlidePop } = useBottomSlidePop(false);
  const { LoadingDom, toggleLoading } = useLoading(false);

  const songCollectInfo = useSelector(({ common }) => common.songCollectInfo);

  const handleGetThisSongCollectInfo = async (id) => {
    toggleLoading(true);

    await dispatch(handleSetSongCollectInfo(id));

    toggleLoading(false);

    toggleBottomSlidePop();
  };

  return (
    <>
      <SongListSlideGroupContent>
        <Title title={title} />

        <Swiper
          className="song-list-swiper-content"
          spaceBetween={10}
          slidesPerView={3.3}
        >
          {playList?.map((item) => (
            <SwiperSlide className="swiper-item" key={item.id}>
              <PlayListItem
                onClick={() => handleGetThisSongCollectInfo(item.id)}
              >
                <div className="cover-box">
                  <img src={item.picUrl} alt="" />
                  <span className="play-count">
                    <i className="iconfont icon-3209257-controllaunchplaystarttriangle"></i>
                    {reduceNumber(item.playCount)}
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

      {LoadingDom}

      {BottomSlidePopDom(
        <SongCollectPop info={songCollectInfo} toggle={toggleBottomSlidePop} />
      )}
    </>
  );
};

export default SongListSlideGroup;
