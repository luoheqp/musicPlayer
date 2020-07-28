import styled from "styled-components";

export const LoginContent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    margin-bottom: 40px;

    svg {
      width: 200px;
    }
  }
`;

export const BigTitle = styled.h3`
  font-size: 36px;
  margin-bottom: 20px;
`;

export const ContentPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .input-item {
    appearance: none;
    border: 0;
    border-bottom: 1px solid #333;
    outline: none;
    padding: 10px 0;
    font-size: 16px;
    text-align: center;
    background-color: #eee;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
