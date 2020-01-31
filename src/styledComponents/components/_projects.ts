import styled from "styled-components";

import { device } from "../display";

import { moveInBottomBig } from "../base/_animation";

import * as Color from "../base/_colors";
import * as Font from "../base/_fonts";

interface widthProps {
  width: string;
}

interface iconProps {
  color: string;
  size: string;
}

export const ProjectsSection = styled.section`
  background-color: ${Color.color_primary}
  display: flex;
  width: 100%;
  flex-direction: row;


  @media only screen and ${device.tablet} {
    flex-direction:column;
  }
`;

export const ProjectTitle = styled.span`
  display: inline-block;
  font-family: ${Font.font_primary};
  font-size: 2.1rem;
  font-weight: 700;
  padding: 5px;
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
  background-size: 272%;
  transition: all 0.2s;
  background-position: 100%;

  span {
    font-weight: 300;
    display: inline-block;
  }

  @media only screen and ${device.tablet} {
    background-size: 300%;
    font-size: 2rem;
  }

  @media only screen and ${device.mobileL} {
    background-size: 290%;
    font-size: 1.8rem;
  }

  @media only screen and ${device.mobileM} {
    background-size: 300%;
    font-size: 1.6rem;
  }

  @media only screen and ${device.mobileS} {
    background-size: 270%;
    font-size: 1.4rem;
  }
`;

export const IconProject = styled.i<iconProps>`
  font-size: ${props => props.size}rem;
  color: ${props => props.color};
`;

export const ProjectsContainer = styled.div`
  box-sizing: border-box;
  padding: 5% 1%;
  width: 50%;
  display: flex;
  flex-direction: column;

  height: 100%;

  @media only screen and ${device.tablet} {
    flex-direction: column;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  text-align: center;
`;

export const ProjectImg = styled.img<widthProps>`
  width: ${props => props.width};
  margin: 0;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  transition: all 0.5s;
`;

export const Project = styled.div`
  box-sizing: border-box;
  opacity: 0;
  width: 65%;
  margin: 0 auto;
  animation-timing-function: ease-out;
  
  &:not(:first-child) {
    margin-top: 7%;
  } 

  p {
    color: ${Color.color_grey_light}
    padding-left: 5px;
    margin-bottom: 5%;
  }
  
  div {
    padding-left: 5px;
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
      
        & > ${ProjectImg} {
          transform: scale(1.03);
          box-shadow: 0 1.1rem 2.1rem rgba(0, 0, 0, 0.22);
        }
      
    }
  }

  @media only screen and ${device.desktop} {
    width: 67%;
  }

  @media only screen and ${device.laptopL} {
    width: 69%;
  }

  @media only screen and ${device.laptop} {
    width: 71%;
  }

  @media only screen and ${device.tablet} {
    width: 73%;
   
  }

  @media only screen and ${device.mobileL} {
    width: 75%;
  }

  @media only screen and ${device.mobileM} {
    width: 77%;
  }

  @media only screen and ${device.mobileS} {
    width: 79%;
  }
`;
