import styled from "styled-components";

export const MusicListSlideGroupContent = styled.div`
  padding: 10px;
`;

export const MusicList = styled.div`
  > .music-list-item {
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    .cover {
      flex: 0 0 50px;
      width: 50px;
      height: 50px;
      margin-right: 15px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 5px;
      }
    }

    .desc {
      flex: 1;
      margin-right: 15px;
      position: relative;
      overflow: hidden;

      .name {
        font-size: 16px;
        line-height: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .other {
        font-size: 12px;
        margin-top: 5px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        &:empty {
          margin-top: 0;
        }
      }
    }

    .play {
      flex: 0 0 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;

      .iconfont {
        font-size: 10px;
        padding: 5px;
      }
    }
  }
`;
