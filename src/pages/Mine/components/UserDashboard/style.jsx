import styled from "styled-components";

export const UserDashboardContent = styled.div``;

export const BasicInfo = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;

  .avatar {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .desc {
    margin-left: 20px;

    .nickname {
      font-size: 36px;
      font-weight: bold;
    }

    .birthday {
      margin-top: 20px;
      font-weight: bold;
    }
  }
`;
