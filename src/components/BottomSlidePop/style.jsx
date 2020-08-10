import styled, { keyframes } from "styled-components";

const slideInAnime = keyframes`
  from {
    transform: translateY(100%);
  } to {
    transform: translateY(0);
  }
`;

export const SlidePopContent = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  z-index: ${({ state }) => (state === "exited" ? -1 : 100)};
  background-color: ${({ state }) =>
    state === "exited" || state === "exiting"
      ? "rgba(0, 0, 0, 0)"
      : "rgba(0, 0, 0, 0.3)"};
  transition: background-color 0.3s linear;

  .main {
    width: 100%;
    height: calc(100vh - 56px);
    position: absolute;
    bottom: -1px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #fff;
    overflow-y: auto;
    transform: translateY(100%);
    transition: transform 0.3s linear;
    animation: ${slideInAnime} 0.3s linear;

    &.entered,
    &.entering {
      transform: translateY(0%);
    }

    .title {
      font-size: 30px;
      font-weight: bold;
      position: sticky;
      top: 0;
      width: 100%;
      padding: 20px;
      padding-bottom: 10px;
      background-color: #fff;
    }
  }
`;

export const SongCollectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
  margin-right: -15px;

  .item {
    width: 100px;
    margin-bottom: 15px;
    margin-right: 15px;

    &:last-child {
      margin-right: auto;
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 20px;
      overflow: hidden;
    }

    .name {
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-top: 5px;
      font-size: 12px;
    }
  }
`;
