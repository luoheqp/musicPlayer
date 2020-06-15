import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const bg = css`
  background-image: ${(props) =>
    props.imgSrc ? `url(${require(`@/assets/img/${props.imgSrc}`)})` : "url()"};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
