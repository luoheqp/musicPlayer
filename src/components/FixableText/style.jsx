import styled from "styled-components";

export const FixableTextContent = styled.div`
  width: 100%;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${({ line }) => line};
  -webkit-box-orient: vertical;
`;
