import styled from "styled-components";
import EmeraldBg from "../../images/emeraldbg.svg";

export const Background = styled.div`
  // Background by SVGBackgrounds.com
  background-position: center center;
  background-color: #050133;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2339075A'/%3E%3Cstop offset='1' stop-color='%23050133'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23016A7C' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23016A7C' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding-left: 100px;
  padding-right: 100px;
  justify-content: center;
  align-items: center;
`;

export const EmeraldWrapper = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const EmeraldSvg = styled.div`
  width: 100%;
  background-image: url(${EmeraldBg});
  background-size: cover;
  height: 0;
  padding: 0; /* reset */
  box-sizing: content-box;
  padding-bottom: calc(100% * 4 / 5);
`;

export const IconRow = styled.li`
  padding-top: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Icon = styled.a`
  color: #ffdcfe;
  font-size: 64px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 10px;
  height: 100%;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  :first-of-type {
    padding-left: 0;
  }

  :last-of-type {
    padding-right: 0;
  }

  &:hover {
    color: #c69bff;
  }
`;
