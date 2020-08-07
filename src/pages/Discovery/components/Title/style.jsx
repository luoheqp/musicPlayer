import styled from "styled-components";

export const TitleContent = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
  position: relative;
  letter-spacing: 5px;
  width: fit-content;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60%;
    height: 2px;
    background-color: #333;
  }
`;
