import styled from "styled-components";

export const SongCollectPopContent = styled.div``;

export const SongCollectDesc = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  padding: 15px;
  background-color: #fff;
  z-index: 1;

  &::after {
    content: "";
    height: 1px;
    width: 90%;
    background-color: #c1c1c1;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }

  .cover {
    flex: 0 0 150px;
    width: 150px;
    height: 150px;
    margin-right: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 20px;
    }
  }

  .info {
    .title {
      min-height: 48px;
      max-height: 72px;
      margin-bottom: 10px;
      line-height: 24px;
      font-size: 18px;
      font-weight: bold;
      display: flex;
      align-items: center;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .desc {
      height: 40px;
      font-size: 16px;
      line-height: 20px;
      color: #000c;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-bottom: 15px;
    }

    .play-count {
      .iconfont {
        font-size: 12px;
        margin-right: 10px;
      }

      font-size: 12px;
    }
  }
`;

export const ControllArea = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  .item {
    flex: 1;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:active {
      opacity: 0.5;
    }

    &:not(:last-child) {
      &::after {
        content: "";
        display: inline-block;
        width: 1px;
        height: 60%;
        position: absolute;
        background-color: #c1c1c1;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .iconfont {
      font-size: 18px;
      margin-right: 2px;
    }
  }
`;
