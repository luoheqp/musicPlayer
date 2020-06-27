import styled from "styled-components";

export const LyricGuyContent = styled.div`
  height: 100%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`;

export const LyricBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: transform 1s linear;
  transform: ${({ pos }) => `translateY(${pos}px)`};
`;

export const LyricItem = styled.p`
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  background-image: linear-gradient(
    to right,
    #333 0%,
    #333 34%,
    transparent 66%,
    transparent 100%
  );
  background-size: 300%;
  background-position: 100%;
  transition: background-position 0.1s linear;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &.active {
    color: #fff;
    background-position: 0%;
  }
`;
