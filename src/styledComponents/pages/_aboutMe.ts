import styled from "styled-components";

import { device } from "../../data/display";
import { moveCharInBottomSmall, moveInBottomSmall } from "../base/_animation";

import ujeon_full_small from "../../assets/images/profile/ujeon-full-small.jpg";
import ujeon_full_large from "../../assets/images/profile/ujeon-full-large.jpg";

import * as Font from "../base/_fonts";
import * as Color from "../base/_colors";

interface Props {
  yPosition?: string;
  letterSpace?: string;
}

export const HeaderSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  background-image: url(${ujeon_full_small});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;

  @media only screen and ${device.tabletPortrait} {
    background-size: cover;
    background-position: center;
  }

  @media (min-resolution: 192dpi) and (min-width: 37.5em), (min-width: 125em) {
    background-image: url(${ujeon_full_large});
  }
`;

export const Name = styled.h1<Props>`
  font-family: ${Font.font_primary};
  font-weight: 400;
  font-size: 14rem;
  color: ${Color.color_black}
  text-transform: uppercase;
  line-height: 100%;
  width: 97%;
  padding-left: 3%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  span {
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    transition: transform 1.1s; 
  }

  @media only screen and ${device.desktop} {
    font-size: 16rem;
  }

  @media only screen and ${device.tabletLandscape} {
    font-size: 12rem;
    font-weight: 500;
  }

  @media only screen and ${device.tabletPortrait} {
    font-size: 10rem;
    font-weight: 500;
    text-align: center;
    color:${Color.color_white}
  }

  @media only screen and ${device.phone} {
    font-size: 8rem;
    font-weight: 500;
    text-align: center;
    color:${Color.color_white}
  }
`;

export const IntroSection = styled.section`
  width: 100%;
  height: 140vh;
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;

  img {
    opacity: 0;
    width: 50%;
    position: absolute;
    top: 35%;
    left: 25%;

    &.visible {
      animation-timing: ease-in-out;
      animation: 1s ${moveInBottomSmall} forwards;
      animation-delay: 1.1s;
    }
  }

  @media only screen and ${device.desktop} {
    height: 130vh;

    img {
      width: 40%;
      top: 30%;
      left: 30%;
    }
  }

  @media only screen and ${device.tabletLandscape} {
    height: 150vh;

    img {
      width: 60%;
      top: 45%;
      left: 23%;
    }
  }

  @media only screen and ${device.tabletPortrait} {
    img {
      width: 70%;
      top: 45%;
      left: 18%;
    }
  }

  @media only screen and ${device.phone} {
    height: 170vh;

    img {
      width: 80%;
      top: 60%;
      left: 13%;
    }
  }
`;

export const IntroContainer = styled.div`
  width: 65%;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  p {
    text-align: left;
    opacity: 0;
    line-height: 200%;

    &.visible {
      animation-timing: ease-in-out;
      animation: 1s ${moveInBottomSmall} forwards;
      animation-delay: 1.2s;
    }
    -moz-column-count: 2;
    -moz-column-gap: 4rem;
    -moz-column-rule: 1px solid #e2e2e2;

    column-count: 2;
    column-gap: 4rem;
    column-rule: 1px solid #e2e2e2;

    @media only screen and ${device.tabletPortrait} {
      -moz-column-count: 1;
      column-count: 1;
    }
  }

  @media only screen and ${device.tabletPortrait} {
    width: 75%;
    top: 25%;
  }

  @media only screen and ${device.phone} {
    width: 90%;
    top: 35%;
  }
`;

export const SectionTitle = styled.h2<Props>`
  font-family: ${Font.font_primary};
  color: ${Color.color_black}
  font-size: 3.4rem;
  margin-bottom: 8%;

  @media only screen and ${device.desktop} {
    font-size: 3.5rem;
  }

  @media only screen and ${device.tabletLandscape} {
    font-size: 3.3rem;
  }

  @media only screen and ${device.tabletPortrait} {
    font-size: 3.2rem;
  }

  @media only screen and ${device.phone} {
    font-size: 3.1rem;
  }
`;

export const Char = styled.span<Props>`
  display: inline-block;
  opacity: 0;
  margin-left: ${props => (props.letterSpace === "true" ? "7px" : "0px")};

  &.visible {
    animation-timing: ease-in-out;
    animation: 0.7s ${moveCharInBottomSmall} forwards;
  }
`;

export const FeaturesSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #eee;

  @media only screen and ${device.tabletPortrait} {
    height: 90vh;
  }
`;

export const FeatureContainer = styled.div`
  width: 65%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media only screen and ${device.tabletPortrait} {
    width: 75%;
  }

  @media only screen and ${device.phone} {
    width: 90%;
    top: 50%;
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 10%;
`;

export const Feature = styled.li`
  opacity: 0;
  transition: opacity 0.5s;
  margin-bottom: 4%;

  &.visible {
    opacity: 1;
  }

  @media only screen and ${device.phone} {
    margin-bottom: 10%;
  }
`;
