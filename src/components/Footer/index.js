import React from "react";
import { Container, Copyright, Decoration } from "./elements";

const Footer = () => {
  const splashes = [
    "💜",
    "blood, sweat, and tears",
    "☄️",
    "caramel macchiatos",
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
