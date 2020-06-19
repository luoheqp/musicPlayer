import styled from "styled-components";

export const IndexContent = styled.div`
  height: 100vh;
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

export const ListContent = styled.div`
  flex: 1;
  padding: 0 10px;
  overflow: hidden;
  overflow-y: auto;
`;

export const PlayerContent = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px #333;
`;
