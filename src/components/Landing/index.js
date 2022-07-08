import React from "react";
import {
  Background,
  EmeraldSvg,
  EmeraldWrapper,
  Icon,
  IconRow,
} from "./elements";
import {
  FaDiscord,
  FaGithub,
  FaItchIo,
  FaSteam,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";

const Landing = () => {
  return (
    <Background>
      <EmeraldWrapper>
        <EmeraldSvg />
      </EmeraldWrapper>
      <IconRow>
        <Icon
          href="https://discord.com/users/164134588275228674"
          target="_blank"
        >
          <FaDiscord />
        </Icon>
        <Icon href="https://github.com/EMERALD0874" target="_blank">
          <FaGithub />
        </Icon>
        <Icon href="https://emerald0874.itch.io/" target="_blank">
          <FaItchIo />
        </Icon>
        <Icon href="https://steamcommunity.com/id/EMERALD0874" target="_blank">
          <FaSteam />
        </Icon>
        <Icon href="https://twitch.tv/EMERALD0874" target="_blank">
          <FaTwitch />
        </Icon>
        <Icon href="https://youtube.com/EMERALD0874" target="_blank">
          <FaYoutube />
        </Icon>
      </IconRow>
    </Background>
  );
};

export default Landing;
