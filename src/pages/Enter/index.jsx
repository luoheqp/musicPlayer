import React, { useState } from "react";

import { EnterContent, Header, Content } from "./style";

// components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Discovery from "@/pages/Discovery";
import Casual from "@/pages/Casual";

const HEADER_LISLT = ["discovery", "casual"];

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
      <Header>
        <div className="slide-menu iconfont icon-Menu"></div>
        <ul className="main-menu">
          {HEADER_LISLT.map((item, index) => (
            <li
              className={`menu-item ${index === activeHeader ? "active" : ""}`}
              key={index}
              onClick={() => handleChangeActiveSlide(index)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="search iconfont icon-chaxun"></div>
      </Header>
      <Content>
        <Swiper
          className="swiper-content"
          onSlideChange={handleSlideChange}
          onSwiper={setSwiperController}
        >
          <SwiperSlide>
            <Discovery />
          </SwiperSlide>
          <SwiperSlide>
            <Casual />
          </SwiperSlide>
        </Swiper>
      </Content>
    </EnterContent>
  );
};

export default Enter;
