import styled from "styled-components";

export const MainPageContent = styled.div`
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;

  .list-item-wrap {
    &:not(:last-child) {
      margin-bottom: 10px
    }
  }
`;

export const ListItem = styled.div`
  font-size: 26px;
  background-color: rgb(255, 211, 39);
  padding: 20px 10px;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 2px;
  word-spacing: 5px;
`;
