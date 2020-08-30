import styled from "styled-components";

export const DiskListSlideGroupContent = styled.div`
  padding: 10px;

  .song-list-swiper-content {
    .swiper-slide {
      transform: scale(0.8);
      transition: transform .1s linear;
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
    font-size: 12px;
    color: #fff;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 10px;
      filter: brightness(0.9);
    }

    .play-count,
    .disk-count {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .play-count {
      right: 5px;
      top: 5px;
    }

    .disk-count {
      left: 5px;
      bottom: 5px;
    }

    .iconfont {
      font-size: 10px;
      margin-right: 3px;
    }
  }

  .name {
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    text-align: center;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
