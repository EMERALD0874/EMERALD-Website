import React from "react";
import {
  Column1,
  Column2,
  Copyright,
  Description,
  ProjectRow,
  ProjectWrapper,
  TextWrapper,
  Title,
} from "./elements";
import ProjectBackground from "./ProjectBackground";
import ProjectImage from "./ProjectImage";

const ProjectData = [
  {
    title: "Valorant Strat Roulette",
    description:
      "This project is a random strategy generator for Valorant, a free-to-play first person shooter for PC. It is intended for use on large screens instead of mobile devices.",
    copyright: `Valorant Strat Roulette was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project.`,
    background: "home/ascent.png",
    image: "home/valorant_agents.png",
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
                <Description>{description}</Description>
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
