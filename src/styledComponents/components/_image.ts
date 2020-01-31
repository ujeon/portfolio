import styled from "styled-components";

import { device } from "../display";

import { moveInBottomBig } from "../base/_animation";

interface imageProps {
  image: string | undefined;
}

interface backgoundColorProps {
  backgroundColor: string | undefined;
}

interface widthProps {
  width: string;
}

export const RelatedImgSection = styled.section<imageProps>`
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

export const PrimaryImgSection = styled.section<backgoundColorProps>`
  width: 100%;
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PrimaryImgContainer = styled.div`
  opacity: 0;
  width: 60%;
  margin: 10% 0 10% 0;

  img {
    width: 100%;
    margin: 0;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  &.visible {
    animation: 0.7s ${moveInBottomBig} forwards;
  }
`;

export const SecondaryImgSection = styled.section<backgoundColorProps>`
  width: 100%;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and ${device.tablet} {
    flex-direction: column;
  }
`;

export const SecondaryImgContainer = styled.div<widthProps>`
  opacity: 0;
  width: ${props => props.width}%;
  margin: 5%;
  box-sizing: border-box;

  img {
    width: 100%;
    margin: 0;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  &.visible {
    animation: 0.7s ${moveInBottomBig} forwards;
  }

  @media only screen and ${device.tablet} {
    width: 60%;
  }
`;
