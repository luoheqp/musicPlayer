import styled from "styled-components";

export const LyricGuyContent = styled.div`
  height: 100%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  .mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(
      to bottom,
      #fff 0%,
      transparent 30%,
      transparent 70%,
      #fff 100%
    );
    z-index: 1;
  }
`;

export const LyricBox = styled.div.attrs(({ pos }) => ({
  style: {
    transform: `translateY(${pos}px)`,
  },
}))`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* transition: transform 0.2s linear; */
  background-image: linear-gradient(
    to bottom,
    #fff,
    transparent 30%,
    transparent 70%,
    #fff 100%
  );
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
  padding: 0 10px;
  box-sizing: border-box;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &.active {
    color: #fff;
    background-position: 0%;
  }
`;
