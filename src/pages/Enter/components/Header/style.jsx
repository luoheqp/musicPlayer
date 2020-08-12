import styled from "styled-components";

export const HeaderContent = styled.div`
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
