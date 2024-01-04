import { styled } from "styled-components";

export const Block = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #435c2b;
  position: fixed;
  top: 0;
  color: #fff;
  z-index: 5;
  box-shadow: 0px 5px 5px 0px #0000004d;
  transition: 0.2s;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    p {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 400;
      img {
        margin-right: 5px;
      }
    }
  }
  .user {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    transform: translateX(80px);
  }
  @media screen and (max-width: 750px) {
    height: 100vh;
    left: ${(p) => p.x};
    display: grid;
    background: #435c2bce;
    backdrop-filter: blur(20px);
    div {
      display: grid;
      gap: 40px;
      text-align: center;
      p {
        margin: auto;
      }
    }
    .user {
      transform: translateX(0);
      margin: auto;
    }
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  position: relative;
  &.link::before {
    content: "";
    height: 3px;
    width: 0;
    background: greenyellow;
    position: absolute;
    bottom: 0;
    border-radius: 3px;
    transition: .1s;
    left: 50%;
    transform: translateX(-50%);
  }
  &.link:active::before {
    content: "";
    height: 3px;
    width: 100%;
  }
`;
