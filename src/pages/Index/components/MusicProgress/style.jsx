import styled from "styled-components";

export const MusicProgressContent = styled.div`
  width: 100%;
  height: 3px;
  background-image: linear-gradient(
    to right,
    rgba(51, 51, 51, 1) ${(props) => `${props.progress}%`},
    rgba(51, 51, 51, 0.2) ${(props) => `${props.progress}%`},
    rgba(51, 51, 51, 0.2) 100%
  );
  position: relative;
  cursor: pointer;

  &:hover {
    .move-point {
      width: 5px;
      height: 5px;
    }
  }

  .move-point {
    width: 0px;
    height: 0px;
    background-color: #333;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.1s linear;
    position: absolute;
    top: 50%;
    left: ${(props) => `${props.progress}%`};
  }
`;
