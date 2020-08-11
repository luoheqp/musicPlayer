import React, { useState } from "react";

import { EnterContent, Content, PlayerControllerContent } from "./style";

// components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Discovery from "@/pages/Discovery";
import PlayerController from "./components/PlayerController";
import Header from "./components/Header";

const Enter = () => {
  const [activeHeader, setActiveHeader] = useState(0);
  const [swiperController, setSwiperController] = useState(null);

  // swiper 滑动触发
  const handleSlideChange = ({ activeIndex }) => {
    setActiveHeader(activeIndex);
  };

  // header 点击触发
  const handleChangeActiveSlide = (index) => {
    swiperController.slideTo(index);
  };

  return (
    <EnterContent>
      <Header toggle={handleChangeActiveSlide} activeHeader={activeHeader} />
      <Content>
        <Swiper
          className="swiper-content"
          onSlideChange={handleSlideChange}
          onSwiper={setSwiperController}
        >
          <SwiperSlide>
            <Discovery />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
      </Content>
      <PlayerControllerContent>
        <PlayerController />
      </PlayerControllerContent>
    </EnterContent>
  );
};

export default Enter;
