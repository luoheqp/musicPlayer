import styled, { keyframes } from "styled-components";

const bigTitleAnimation = keyframes`
  to {
    background-position: left top;
  }
`;

export const MainPageContent = styled.div`
  padding: 10px;
`;

export const BigTitle = styled.h3`
  font-size: 80px;
  background-size: 600%;
  background-position: right top;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5);
  color: transparent;
  animation: ${bigTitleAnimation} 5s linear alternate infinite;
`;
