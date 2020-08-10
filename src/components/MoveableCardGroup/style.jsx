import styled, { keyframes } from "styled-components";

const MainCardSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-60px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const BackCardSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(-100px);
  }
  100% {
    opacity: .8;
    transform: scale(0.9) translateY(-20px);
  }
`;

export const MoveableCardGroupContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .card-contant {
    width: 300px;
    height: 400px;
    position: absolute;

    &:nth-child(1) {
      z-index: 1;
      /* animation: ${MainCardSlideIn} 0.8s linear forwards; */
    }

    &:nth-child(2) {
      z-index: 0;
      transform-origin: top;
      opacity: .8;
      transform: scale(0.9) translateY(-20px);
      /* NOTE: 此处动效会有点奇怪 */
      transition: all 0.1s linear;
      animation-delay: 1s;
      /* animation: ${BackCardSlideIn} 0.8s linear forwards; */
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px #ccc;

  .cover {
    height: 200px;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  > .name {
    font-size: 20px;
    line-height: 26px;
    padding: 10px;
    padding-bottom: 0;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 5px solid #fff;
    margin-top: -60px;
    margin-bottom: 0px;
  }

  > .name {
    font-size: 12px;
  }
`;

export const Player = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .controller {
    margin: 5px 0;

    .player {
      font-size: 20px;
      padding: 10px;
    }
  }

  .progress {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .time {
      font-size: 12px;
      margin-bottom: 10px;
    }

    .line {
      width: 80%;
      height: 2px;
      background-color: #ccc;
      border-radius: 1px;
    }
  }
`;
