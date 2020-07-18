import styled from "styled-components";

export const IndexContent = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  flex: 0 0 56px;
  height: 56px;
  display: flex;
  align-items: flex-end;
  padding: 10px;
  box-sizing: border-box;

  .item {
    font-size: 20px;
    line-height: 36px;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: all 0.1s linear;

    &:not(:last-child) {
      margin-right: 10px;
    }

    &.active {
      font-size: 36px;
      color: rgb(51, 51, 51);
    }
  }
`;

export const SlideContent = styled.div`
  flex: 1;
  position: relative;
  transition: transform 0.1s linear;
  transform: translateX(
    ${({ state, active }) => {
      return `${-100 * active}vw`;
    }}
  );
`;

const BasicContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100vw;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
`;

export const HelloContent = styled(BasicContent)`
  left: 0vw;
`;

export const ListContent = styled(BasicContent)`
  left: 100vw;
  margin-bottom: 10px;
`;

export const PlayerContent = styled(BasicContent)`
  left: 200vw;
`;

export const MineContent = styled(BasicContent)`
  left: 300vw;
`;

export const MiniPlayerContent = styled.div`
  flex: ${({ state }) => (state === "entered" ? "0 0 100px" : "0")};
  height: ${({ state }) => (state === "exited" ? "0" : "fit-content")};
  transform: ${({ state }) =>
    state === "entered" ? "scaleY(1)" : "scaleY(0)"};
  transform-origin: bottom;
  transition: transform 0.1s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px #333;
  background-color: #fff;
`;
