import styled from "styled-components";
import chroma from "chroma-js";

export const ProjectWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 250px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ProjectRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgLeft }) =>
    imgLeft ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 1063px) {
    grid-template-areas: "col1";
  }
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  padding: 30px;
  background-color: #00000080;
  border-radius: 10px;
  color: #fff;
`;

export const Title = styled.h1`
  margin-bottom: 4px;
`;

export const Description = styled.p`
  margin-bottom: 16px;
`;

export const Copyright = styled.small`
  font-style: italic;
  color: #aaa;
`;

export const Column1 = styled.div`
  padding: 0 32px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;

  @media screen and (max-width: 1063px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: left;
  margin-top: 16px;

  @media screen and (max-width: 768px) {
    justify-content: left;
  }

  > * {
    margin-right: 10px;
  }
  > *:last-child {
    margin-right: 0px;
  }
`;

export const ButtonLink = styled.a`
  border-radius: 50px;
  background: ${({ color }) => (color ? color : `#000`)};
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ color }) => (color ? chroma(color).darken(0.3) : `#000`)};
  }
`;

export const DisabledButton = styled.div`
  border-radius: 50px;
  background: #222;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
