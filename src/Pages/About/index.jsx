import React from "react";
import { Block } from "./style";
import { Zoom } from "react-reveal";

export default function About() {
  return (
    <Block id="about">
      <Zoom left>
        <img src={require("../../Assets/AboutPageImage.png")} />
      </Zoom>
      <Zoom right>
        <div className="text">
          <h1>About project</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>
      </Zoom>
    </Block>
  );
}
