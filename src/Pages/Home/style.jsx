import { styled } from "styled-components";

export const Block = styled.div`
  width: 100%;
  padding: 30px 0;
  background: url(${require("../../Assets/Background.png")});
  background-size: cover;
  display: grid;
  place-items: center;
  .card {
    padding-top: 70px;
    h1 {
      color: #fff;
      text-align: center;
      font-size: 32px;
      font-weight: 400;
    }
    .box {
      margin: 15px auto;
      width: 500px;
      height: 180px;
      background: #fff;
      border-radius: 25px;
      display: grid;
      place-items: center;
      overflow: hidden;
      position: relative;
      svg {
        position: absolute;
        z-index: 1;
      }
      h3 {
        z-index: 3;
        text-align: start;
        position: absolute;
        top: 25px;
        left: 25px;
        display: flex;
        align-items: center;
        span {
          border-radius: 4px;
          box-shadow: 0px 1px 4px 0px #00000026;
          font-size: 10px;
          padding: 3px 10px;
          margin-left: 15px;
        }
      }
      .row {
        z-index: 2;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        div {
          margin: 10px 0;
          width: 50px;
          height: 80%;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: end;
          justify-content: center;
        }
        .active::before {
          content: "";
          width: 50px;
          position: absolute;
          height: 180px;
          transform: translateY(25px);
          background: #435c2b33;
        }
        .active::after {
          content: "";
          width: 10px;
          height: 10px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 0 10px #8e8e8e45;
          top: 65px;
          position: absolute;
        }
      }
      img {
        transform: translateY(10px);
      }
      button {
        height: 48px;
        width: 220px;
        border-radius: 25px;
        background: #435c2b;
        outline: none;
        border: none;
        font-size: 24px;
        color: #fff;
        margin: auto;
        cursor: pointer;
        transform: translateY(-10px);
      }
    }
    .line {
      display: flex;
      justify-content: space-evenly;
      margin: auto;
      button {
        height: 50px;
        width: 160px;
        border-radius: 25px;
        outline: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
      }
      button:nth-child(2) {
        background: #435c2b;
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 750px) {
    display: block;
    height: auto;
    .card {
      width: 100%;
      padding-top: 0;
      .box {
        width: 95%;
      }
    }
  }
`;
