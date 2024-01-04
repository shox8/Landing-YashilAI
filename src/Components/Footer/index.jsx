import React from "react";
import { Anchor, Block } from "./style";

export default function Footer() {
  return (
    <Block id="support">
      <div className="column">
        <p className="text">
          <span>YashilAI</span> - is a powerful website builder with which
          anyone can easily create a professional website or online store.
        </p>
      </div>
      <div className="column">
        <div className="box">
          <Anchor>Telegram</Anchor>
          <Anchor>Instagram</Anchor>
          <Anchor>Facebook</Anchor>
        </div>
        <div className="box">
          <Anchor>Call Center</Anchor>
          <Anchor>Location</Anchor>
        </div>
        <div className="box">
          <p>Copy Writing 2023</p>
        </div>
      </div>
    </Block>
  );
}
