import styled from "styled-components";

export const SongCollectPopContent = styled.div``;

export const SongCollectDesc = styled.div`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .mask-wrap {
    padding: 20px;
    backdrop-filter: blur(10px);
    filter: drop-shadow(0px 0px 10px #ccc);
    color: #fff;

    .title {
      font-size: 22px;
      line-height: 26px;
      margin-bottom: 20px;
    }

    .desc {
      height: 40px;
      font-size: 16px;
      line-height: 20px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-bottom: 15px;
    }

    .play-count {
      font-size: 12px;
    }
  }
`;
