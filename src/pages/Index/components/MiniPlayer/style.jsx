import styled from "styled-components";

export const MiniPlayerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .control-area {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    box-sizing: border-box;
  }
`;

export const PlayerCycleControl = styled.input.attrs((props) => ({
  type: "button",
}))`
  appearance: none;
  background-color: unset;
  border: unset;
`;

export const PlayerStateControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;

  .btn {
    appearance: none;
    background-color: unset;
    border: unset;
  }

  .iconfont {
    font-size: 30px;
  }
`;

export const MusicProgressContent = styled.div`
  width: 80%;
`;
