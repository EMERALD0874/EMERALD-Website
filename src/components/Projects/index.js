import React from "react";
import {
  ButtonLink,
  ButtonWrapper,
  Column1,
  Column2,
  Copyright,
  Description,
  DisabledButton,
  ProjectRow,
  ProjectWrapper,
  TextWrapper,
  Title,
} from "./elements";
import ProjectBackground from "./ProjectBackground";
import ProjectImage from "./ProjectImage";

const ProjectData = [
  {
    title: "Steam Deck Themes",
    description:
      "This is a collection of Steam Deck themes I created to experiment more with CSS. Some of my themes like Obsidian have been used as building blocks for other themes.",
    copyright: `These Steam Deck Themes are not sponsored, endorsed, licensed by, or affiliated with Steam Deck or Valve Corporation.`,
    background: "home/galactic.png",
    image: "home/steam_deck.png",
    color: "#1a9fff",
    link: "https://github.com/EMERALD0874/Steam-Deck-Themes",
  },
  {
    title: "Valorant Strat Roulette",
    description:
      "This project is a random strategy generator for Valorant, a free-to-play first person shooter for PC. It is intended for use on large screens instead of mobile devices.",
    copyright: `Valorant Strat Roulette was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project.`,
    background: "home/ascent.png",
    image: "home/valorant_agents.png",
    color: "#FA4454",
  },
];

const Projects = () => {
  return (
    <>
      {ProjectData.map((i, index) => (
        <Project
          title={i.title}
          description={i.description}
          copyright={i.copyright}
          background={i.background}
          image={i.image}
          imgLeft={index % 2 === 1}
          color={i.color}
          link={i.link}
        />
      ))}
    </>
  );
};

const Project = ({
  title,
  description,
  copyright,
  background,
  image,
  imgLeft,
  color,
  link,
}) => {
  return (
    <div style={{ display: "grid" }}>
      <ProjectBackground filename={background} />
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}
      >
        <ProjectWrapper>
          <ProjectRow imgLeft={imgLeft}>
            <Column1>
              <TextWrapper>
                <Title>{title}</Title>
                <Description>
                  {description}
                  <ButtonWrapper>
                    {link && (
                      <ButtonLink href={link} color={color}>
                        Open
                      </ButtonLink>
                    )}
                    {!link && <DisabledButton>Not Available</DisabledButton>}
                  </ButtonWrapper>
                </Description>
                <Copyright>{copyright}</Copyright>
              </TextWrapper>
            </Column1>
            <Column2>
              <ProjectImage filename={image} />
            </Column2>
          </ProjectRow>
        </ProjectWrapper>
      </div>
    </div>
  );
};

export default Projects;
