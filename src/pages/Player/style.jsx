import styled from "styled-components";

export const PlayerContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
`;

export const EffectBox = styled.div`
  /* flex: 0 0 ${({ showState }) => (showState ? "300px" : "0")}; */
  height: ${({ showState }) => (showState ? "300px" : "0")};
  opacity: ${({ showState }) => (showState ? 1 : 0)};
  transition: all 0.3s linear;
`;

export const LyricBox = styled.div`
  flex: 1;
  width: 100%;
  margin: 20px 0;
  position: relative;
`;
