import styled from "styled-components";

export const MusicListSlideGroupContent = styled.div`
  padding: 10px;

  .title {
    font-size: 16px;
    margin-bottom: 20px;
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
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .other {
        font-size: 12px;
        margin-top: 10px;
      }
    }

    .play {
      flex: 0 0 50px;
      width: 50px;
      height: 50px;
      background-color: #333;
    }
  }
`;
