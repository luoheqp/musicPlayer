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
  justify-content: space-evenly;

  .item {
    width: 45%;
    margin-bottom: 20px;
    border-radius: 20px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
