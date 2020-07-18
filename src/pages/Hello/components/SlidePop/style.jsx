import styled from "styled-components";

export const SlidePopContent = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);

  .title {
    font-size: 30px;
    font-weight: bold;
    position: sticky;
    top: 0;
    width: 100%;
    padding: 20px;
    padding-bottom: 10px;
    background-color: #fff;
  }

  .main {
    width: 100%;
    height: calc(100vh - 56px);
    position: absolute;
    bottom: -1px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #fff;
    overflow-y: auto;

    .list-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;

      .item {
        width: 45%;
        margin-bottom: 20px;
        border-radius: 10px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
`;
