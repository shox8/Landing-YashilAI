import React from "react";
import { Block } from "./style";
import { Bounce } from "react-reveal";

export default function Result() {
  return (
    <Block>
      <h1 className="title">Result analiys</h1>
      <div className="list">
        <Bounce cascade>
          <div className="card">
            <img src={require("../../Assets/Leaf1.png")} />
            <h1>Potato</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="card">
            <img src={require("../../Assets/Leaf2.png")} />
            <h1>Strawberry</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="card">
            <img src={require("../../Assets/Leaf3.png")} />
            <h1>Grape black</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Bounce>
      </div>
    </Block>
  );
}
