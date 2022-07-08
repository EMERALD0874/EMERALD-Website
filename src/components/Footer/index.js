import React from "react";
import { Container, Copyright, Decoration } from "./elements";

const Footer = () => {
  // "Made with [splash] by EMERALD"
  const splashes = [
    "💜",
    "blood, sweat, and tears",
    "☄️",
    "caramel macchiatos",
    "a lot of villager trades",
    "💎",
    "two dollars to his name",
    "🤬",
    "a lot of curse words in the comments",
    "Gatsby",
    "a severe lack of time management",
    "2 AM gaming sessions",
    "much sarcasm",
    "a TLD his parents will hate",
    "a sheep who runs a server farm",
    "a really cool duck",
    "a pie addict",
    "an alcoholic bear",
  ];

  return (
    <>
      <Container>
        <Decoration>
          Made with {splashes[Math.floor(Math.random() * splashes.length)]} by
          EMERALD
        </Decoration>
        <Copyright>© EMERALD, 2022. All rights reserved.</Copyright>
      </Container>
    </>
  );
};

export default Footer;
