import styled from "styled-components";

export const MoveableCardGroupContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .card-contant {
    position: absolute;

    &:nth-child(1) {
      z-index: 1;
    }

    &:nth-child(2) {
      z-index: 0;
      
    }
  }
`;
