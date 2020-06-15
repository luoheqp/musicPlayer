import styled from "styled-components";

export const List = styled.ul`
`;

export const ListItem = styled.li`
  height: 42px;
  box-sizing: border-box;
  color: #333;
  font-size: 14px;
  padding: 11px;
  transition: all 0.1s linear;
  cursor: pointer;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  /* TODO: 实现方式还是有点缺陷 */
  &:hover,
  &.playing {
    padding: 5.5px 10px;
    border: 1px solid #333;
    border-bottom: 10px solid #333;
    border-right: 10px solid #333;
    clip-path: polygon(
      0 0,
      calc(100% - 10px) 0,
      100% 10px,
      100% 100%,
      10px 100%,
      0 calc(100% - 10px)
    );
  }

  &.playing {
    border-color: rgb(0, 108, 255);
  }
`;