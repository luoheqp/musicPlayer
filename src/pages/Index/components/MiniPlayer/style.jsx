import styled from "styled-components";

export const MiniPlayerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ControllerGroup = styled.div`
  margin-bottom: 10px;

  .btn {
    appearance: none;
    background-color: unset;
    border: unset;
  }
`;

export const MusicProgress = styled.div`
  width: 80%;
  height: 3px;
  background-image: linear-gradient(
    to right,
    rgba(51, 51, 51, 1) ${(props) => `${props.progress}%`},
    rgba(51, 51, 51, 0.2) ${(props) => `${props.progress}%`}
  );
`;
