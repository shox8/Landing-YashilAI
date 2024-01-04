import { styled } from "styled-components";

export const Block = styled.div`
  max-width: 100%;
  padding: 50px;
  display: flex;
  .column {
    width: 50%;
    display: flex;
    justify-content: space-between;
    .text {
      margin: auto;
      width: 50%;
    }
    span {
      font-weight: bold;
    }
    .box {
      display: grid;
    }
  }
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    .column {
      width: 100%;
      flex-wrap: wrap;
      margin: 10px 0;
      .text {
        width: 100%;
      }
    }
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  margin: 3px 0;
`;
