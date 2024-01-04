import { styled } from "styled-components";

export const Block = styled.div`
  max-width: 100%;
  padding: 80px 150px;
  .title {
    font-size: 36px;
    font-weight: 700;
  }
  .list {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    gap: 30px;
    .card {
      width: 255px;
      margin: 10px 0;
      transition: 0.2s;
      img {
        border-radius: 25px;
      }
      h1,
      p {
        margin: 15px 0;
      }
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  @media screen and (max-width: 750px) {
    max-height: auto;
    padding: 50px 50px;
    .title {
      text-align: center;
    }
    .list {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
