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
  width: 300vw;
  position: relative;
  transition: transform 0.1s linear;
  transform: translateX(
    ${({ state, active }) => {
      return `${-100 * active}vw`;
    }}
  );
`;

export const ListContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100vw;
  padding: 0 10px;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
`;

export const PlayerContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 100vw;
  width: 100vw;
  padding: 0 10px;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
`;

export const MineContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 200vw;
  width: 100vw;
  padding: 0 10px;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
`;

export const MiniPlayerContent = styled.div`
  flex: 0 0 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px #333;
`;
