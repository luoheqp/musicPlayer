import styled from "styled-components";

export const DiskListSlideGroupContent = styled.div`
  padding: 10px;

  .song-list-swiper-content {
    .swiper-slide {
      transform: scale(0.8);
      transition: transform 0.1s linear;
    }

    .swiper-slide-active {
      transform: scale(1);
    }
  }
`;

export const DiskItem = styled.div`
  .cover-box {
    margin-bottom: 5px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 10px;
      filter: brightness(0.9);
    }
  }

  .name {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0%;
    top: 0%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
