import styled from "styled-components";

export const SlidePopContent = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  z-index: ${({ state }) => (state === "exited" ? -1 : 10)};
  background-color: ${({ state }) =>
    state === "exited" ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.3)"};
  transition: background-color 0.1s linear;

  .main {
    width: 100%;
    height: calc(100vh - 56px);
    position: absolute;
    bottom: -1px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #fff;
    overflow-y: auto;
    transform: ${({ state }) =>
      state === "exited" ? "translateY(100%)" : "translateY(0%)"};
    transition: transform 0.1s linear;

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
      width: 100%;
      object-fit: contain;
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
