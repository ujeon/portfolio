import styled from "styled-components";

import { device } from "../../data/display";
import { moveCharInBottomSmall, moveInBottomSmall } from "../base/_animation";

import ujeon_full from "../../assets/images/ujeon_full.jpg";

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
  background-image: url(${ujeon_full});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;

  @media only screen and ${device.mobileL} {
    background-size: cover;
    background-position: bottom;
  }
`;

export const Name = styled.h1<Props>`
  font-family: ${Font.font_primary};
  font-weight: 400;
  font-size: 16rem;
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

  @media only screen and ${device.mobileL} {
    font-size: 8rem;
    font-weight: 500;
    text-align: center;
    color:${Color.color_white}
  }
`;

export const IntroSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;

  img {
    opacity: 0;
    width: 25%;
    position: absolute;
    top: 37%;
    left: 38%;

    &.visible {
      animation-timing: ease-in-out;
      animation: 1s ${moveInBottomSmall} forwards;
      animation-delay: 1s;
    }
  }

  @media only screen and ${device.laptopL} {
    height: 130vh;

    img {
      width: 35%;
      top: 38%;
      left: 32%;
    }
  }

  @media only screen and ${device.laptop} {
    img {
      top: 50%;
      left: 32%;
    }
  }

  @media only screen and ${device.tablet} {
    height: 120vh;

    img {
      width: 47%;
      top: 60%;
      left: 25%;
    }
  }

  @media only screen and ${device.mobileL} {
    height: 170vh;

    img {
      width: 80%;
      top: 63%;
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

    @media only screen and ${device.tablet} {
      -moz-column-count: 1;
      column-count: 1;
    }
  }

  @media only screen and ${device.laptop} {
    top: 35%;
  }

  @media only screen and ${device.tablet} {
    width: 75%;
  }

  @media only screen and ${device.mobileL} {
    width: 90%;
    top: 40%;
  }
`;

export const SectionTitle = styled.h2<Props>`
  font-family: ${Font.font_primary};
  color: ${Color.color_black}
  font-size: 3.3rem;
  margin-bottom: 6%;

  @media only screen and ${device.tablet} {
    font-size: 2.9rem;
    margin-bottom: 10%;
  }

  @media only screen and ${device.mobileL} {
    font-size: 2.5rem;
    margin-bottom: 13%;
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

export const FeatureContainer = styled.div`
  width: 65%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media only screen and ${device.laptop} {
    top: 50%;
  }

  @media only screen and ${device.tablet} {
    width: 75%;
  }

  @media only screen and ${device.mobileL} {
    width: 90%;
    top: 50%;
  }
`;

export const FeaturesSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #eee;

  @media only screen and ${device.mobileL} {
    height: 125vh;
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 8%;
`;

export const Feature = styled.li`
  opacity: 0;
  transition: opacity 0.5s;
  margin-bottom: 4%;

  &.visible {
    opacity: 1;
  }

  @media only screen and ${device.mobileL} {
    margin-bottom: 10%;
  }
`;
