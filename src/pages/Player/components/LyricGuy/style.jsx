import styled from "styled-components";

export const LyricGuyContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const LyricWrapper = styled.div`
  padding: 0 10px;

  .lyric-item {
    text-align: center;
    line-height: 20px;
    font-size: 16px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
