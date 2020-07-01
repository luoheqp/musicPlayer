import styled from "styled-components";

export const PlaygroundContent = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .ball-wrap {
    width: 100px;
    height: 200px;

    .ball {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #333;
    }
  }
`;
