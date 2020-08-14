import styled from "styled-components";

export const EnterContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  flex: 1;
  position: relative;

  > .swiper-content {
    position: absolute;
    width: 100%;
    height: 100%;

    .swiper-wrapper {
      height: 100%;
    }

    .swiper-slide {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
`;

export const PlayerControllerContent = styled.div`
  padding: 5px 0;
`;
