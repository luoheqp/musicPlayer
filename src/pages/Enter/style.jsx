import styled from "styled-components";

export const EnterContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.div`
  flex: 0 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  .slide-menu {
    font-size: 20px;
  }

  .search {
    font-size: 20px;
  }

  .main-menu {
    display: flex;
    align-items: center;
    justify-content: center;

    .menu-item {
      padding: 0 10px;
      text-transform: uppercase;
      transition: all 0.3s linear;
      color: #ccc;

      &.active {
        color: #333;
      }
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  position: relative;

  > .swiper-content {
    position: absolute;
    width: 100%;
    height: 100%;

    .swiper-wrapper {
      height: 100%;
    }

    .swiper-slide {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
`;
