import styled from "styled-components";

export const PreLoginContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    font-size: 36px;
    margin-bottom: 40px;
  }

  .btn-login {
    border: 2px solid #333;
    padding: 10px 20px;

    &:active {
      color: #fff;
      background-color: #333;
    }
  }
`;
