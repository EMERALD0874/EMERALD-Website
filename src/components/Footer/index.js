import React from "react";
import { Container, Copyright, Decoration } from "./elements";

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
  "Next.js",
  "a severe lack of time management",
  "2 AM gaming sessions",
  "much sarcasm",
  "a TLD his parents will hate",
  "a sheep who runs a server farm",
  "a really cool duck",
  "an alcoholic bear",
  "zero cocktails, to his friend's disappointment,",
  "a fennec who loves Pokémon cards",
  "a strange dissatisfaction with October 4",
  "someone really bad at Mortal Kombat",
  "an espresso or two",
  "someone with a more optimized website",
  "a █████ ██ ████████",
  "a diving bird",
];

const randomSplash = () =>
  splashes[Math.floor(Math.random() * splashes.length)];

const Footer = ({ legal }) => {
  const [splash, setSplash] = React.useState();

  React.useEffect(() => {
    setSplash(randomSplash());
  }, []);

  return (
    <>
      <Container>
        <Decoration>
          Made{splash ? ` with ${splash}` : ``} by EMERALD
        </Decoration>
        <Copyright>
          © EMERALD, 2022. All rights reserved.{legal ? ` ${legal}` : ``}
        </Copyright>
      </Container>
    </>
  );
};

export default Footer;
