import styled from "styled-components";

import { ImageContainer } from "./_image";

import { device } from "../../data/display";

import { moveInBottomBig } from "../base/_animation";

import * as Color from "../base/_colors";
import * as Font from "../base/_fonts";

interface projectProps {
  width?: string;
  color?: string;
  size?: string;
  type?: string;
}

export const ProjectsSection = styled.section`
  background-color: ${Color.color_primary}
  display: flex;
  width: 100%;
  flex-direction: row;


  @media only screen and ${device.tabletPortrait} {
    flex-direction:column;
  }
`;

export const ProjectTitle = styled.div`
  display: inline-block;
  font-family: ${Font.font_primary};
  font-size: 3.6rem;
  font-weight: 700;
  margin: 5% 0 1% 0;
  color: ${Color.color_black};
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(
    to left,
    transparent 0%,
    transparent 50%,
    ${Color.color_secondary} 50%
  );
  background-size: 300%;
  transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);

  background-position: 100%;

  span {
    font-weight: 300;
    display: inline-block;
  }

  &:hover {
    background-position: 0%;
    color: ${Color.color_primary};
  }

  @media only screen and ${device.desktop} {
    font-size: 3.8rem;
  }

  @media only screen and ${device.tabletLandscape} {
    font-size: 3.4rem;
  }

  @media only screen and ${device.tabletPortrait} {
    font-size: 3.2rem;
  }

  @media only screen and ${device.phone} {
    font-size: 3rem;
  }
`;

export const IconProject = styled.i<projectProps>`
  font-size: ${props => props.size}rem;
  color: ${props => props.color};
  transition: all 0.5s;
`;

export const ProjectsContainer = styled.div`
  box-sizing: border-box;
  padding: 5% 2%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and ${device.tabletPortrait} {
    width: 100%;
  }
`;

export const ProjectImg = styled.img<projectProps>`
  width: ${props => props.width};
  margin: 0;
  ${props =>
    props.type === "web"
      ? "box-shadow: 0 1.6rem 3.2rem rgba(0, 0, 0, 0.2);"
      : ""}
  border-radius: 0 0 3px 3px;
`;

export const Project = styled.div<projectProps>`
  box-sizing: border-box;
  opacity: 0;

  animation-timing-function: ease-out;

  &:not(:first-child) {
    margin-top: 7%;
  }

  p {
    color: ${Color.color_grey_light};
    margin-bottom: 5%;
  }

  &.visible {
    animation: 0.7s ${moveInBottomBig} forwards;
  }

  &:hover {
    & a {
      & > ${ProjectTitle} {
        background-position: 0%;
        color: ${Color.color_primary};

        & > ${IconProject} {
          color: ${Color.color_primary};
        }
      }
    }

    & > ${ImageContainer} {
      transform: scale(1.03);
      ${props =>
        props.type === "web" &&
        "box-shadow: 0 1.6rem 3.2rem rgba(0, 0, 0, 0.2);"}
    }
  }
`;
