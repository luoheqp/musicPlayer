import styled from "styled-components";

export const IndexContent = styled.div`
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 10px;

  h3 {
    font-size: 36px;
    color: #333;
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
