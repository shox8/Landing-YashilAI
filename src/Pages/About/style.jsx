import { styled } from "styled-components";

export const Block = styled.div`
  max-width: 100%;
  background: #435c2b;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 85px 150px;
  img {
    width: 50%;
    border-radius: 90px;
    border-bottom-left-radius: 0;
    box-shadow: 10px -10px #fff;
  }
  .text {
    margin-left: 20px;
    width: 45%;
    color: #fff;
    h1 {
      margin: 30px 0;
    }
    p {
      font-size: 18px;
      margin: 20px 0;
    }
  }
  @media screen and (max-width: 750px) {
    padding: 25px;
    img {
      width: 100%;
    }
    .text {
      width: 100%;
      text-align: center;
    }
  }
`;
