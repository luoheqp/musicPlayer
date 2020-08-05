import styled from "styled-components";

export const SongListSlideGroupContent = styled.div`
  padding: 10px;

  .title {
    font-size: 16px;
    margin-bottom: 15px;
    position: relative;

    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 20%;
      height: 2px;
      background-color: #333;
    }
  }

  > .song-list-swiper-content {
    .swiper-item {
    }
  }
`;

export const PlayListItem = styled.div`
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
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
