import styled from "styled-components";

import { device } from "../../data/display";

import { moveInBottomBig } from "../base/_animation";

interface projectImgProps {
  width?: string;
  backgroundColor?: string | undefined;
  image?: string | undefined;
  type?: string;
}

export const ImageContainer = styled.span`
  display: block;
  transition: all 0.5s;
`;

export const BrowserTab = styled.span<projectImgProps>`
  height: ${props => (props.type === "web" ? "30" : "0")}px;
  border-radius: 3px 3px 0 0;
  background-color: #eef1f4;
  display: block;

  ${props =>
    props.type === "web" && "box-shadow: 0 1.6rem 3.2rem rgba(0, 0, 0, 0.2);"}

  span {
    display: inline-block;
    margin: 10px 0 0 5px;
    ${props => props.type === "web" && "width: 10px; height: 10px;"}
    // width: 10px;
    // height: 10px;
    border-radius: 50%;
    background-color: #dce1e6;
  }
`;

export const RelatedImgSection = styled.section<projectImgProps>`
  width: 100%;
  height: 70vh;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0, 10%;

  @media only screen and ${device.desktop} {
    height: 65vh;
  }

  @media only screen and ${device.laptopL} {
    height: 60vh;
  }

  @media only screen and ${device.laptop} {
    height: 55vh;
  }

  @media only screen and ${device.tablet} {
    height: 50vh;
  }

  @media only screen and ${device.mobileL} {
    height: 45vh;
  }

  @media only screen and ${device.mobileM} {
    height: 40vh;
  }

  @media only screen and ${device.mobileS} {
    height: 35vh;
  }
`;

export const PrimaryImgSection = styled.section<projectImgProps>`
  width: 100%;
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PrimaryImgContainer = styled.div<projectImgProps>`
  opacity: 0;
  width: ${props => (props.type === "web" ? "60" : "30")}%;
  margin: 10% 0 10% 0;

  img {
    width: 100%;
    margin: 0;
    ${props =>
      props.type === "web"
        ? "box-shadow: 0 1.6rem 4.2rem rgba(0, 0, 0, 0.2);"
        : ""}
    border-radius:  0 0 3px 3px;
  }

  &.visible {
    animation: 1.2s ${moveInBottomBig} forwards;
  }

  @media only screen and ${device.tablet} {
    margin: 15%;
    min-width: 90%;

    &.visible {
      animation: 1.5s ${moveInBottomBig} forwards;
    }
  }
`;

export const SecondaryImgSection = styled.section<projectImgProps>`
  width: 100%;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and ${device.tablet} {
    flex-direction: column;
  }
`;

export const SecondaryImgContainer = styled.div<projectImgProps>`
  opacity: 0;
  max-width: 50%;
  width: ${props => props.width}%;
  margin: 5%;
  box-sizing: border-box;

  img {
    width: 100%;
    margin: 0;
    ${props =>
      props.type === "web"
        ? "box-shadow: 0 1.6rem 3.2rem rgba(0, 0, 0, 0.2);"
        : ""}
    border-radius: 0 0 3px 3px;
  }

  &.visible {
    animation: 1.2s ${moveInBottomBig} forwards;
  }

  @media only screen and ${device.tablet} {
    min-width: 90%;

    &:first-child {
      margin-top: 15%;
    }

    &:last-child {
      margin-bottom: 15%;
    }

    &.visible {
      animation: 1.5s ${moveInBottomBig} forwards;
    }
  }
`;
