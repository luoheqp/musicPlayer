import styled from "styled-components";

export const PlaygroundContent = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .text-area {
    width: 200px;
    height: 100px;
    border: 1px solid #333;
    box-sizing: border-box;
    margin-bottom: 40px;
  }
`;
