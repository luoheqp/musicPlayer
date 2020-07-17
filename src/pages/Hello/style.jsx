import styled from "styled-components";

export const HelloContent = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    width: 50%;
    height: 30px;
    box-sizing: border-box;
    margin-bottom: 5px;

    &:active {
      box-shadow: 0 0 10px #333;
    }
  }
`;
