import styled from "styled-components";

export const MusicProgressContent = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
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
      width: 10px;
      height: 10px;
    }
  }
`;

export const MovePoint = styled.div`
  width: ${({ isDraging }) => `${isDraging ? "10px" : "0px"}`};
  height: ${({ isDraging }) => `${isDraging ? "10px" : "0px"}`};
  background-color: #333;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.1s cubic-bezier(1, 0, 0, 2),
    height 0.1s cubic-bezier(1, 0, 0, 2);
  position: absolute;
  top: 50%;
  left: ${(props) => `${props.progress}%`};
`;
