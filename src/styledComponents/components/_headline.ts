import styled from "styled-components";

import { device } from "../../data/display";
import * as Color from "../base/_colors";
import * as Font from "../base/_fonts";

export const HeadLineSection = styled.section`
  display: flex;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 92vh;

  @media only screen and ${device.desktop} {
    height: 97vh;
  }

  @media only screen and ${device.tabletPortrait} {
    height: 87vh;
  }

  @media only screen and ${device.phone} {
    height: 82vh;
  }
`;

export const HeadLineTitle = styled.h1`
  font-family: ${Font.font_primary};
  font-size: 4.6rem;
  font-weight: 900;
  width: 71%;
  color: ${Color.color_black};
  margin: 2% 0 2% 0%;
  line-height: 160%;

  span {
    color: ${Color.color_secondary};
  }

  @media only screen and ${device.desktop} {
    width: 72%;
    font-size: 5.1rem;
  }

  @media only screen and ${device.tabletLandscape} {
    width: 73%;
    font-size: 4.1rem;
  }

  @media only screen and ${device.tabletPortrait} {
    width: 74%;
    font-size: 3.6rem;
  }

  @media only screen and ${device.phone} {
    width: 75%;
    font-size: 3.1rem;
  }
`;

export const DescContainer = styled.div`
  width: 72%;
  display: flex;
  flex-direction: row;
  margin-top: 5%;

  @media only screen and ${device.desktop} {
    width: 71%;
  }

  @media only screen and ${device.tabletLandscape} {
    width: 73%;
  }

  @media only screen and ${device.tabletPortrait} {
    width: 74%;
  }

  @media only screen and ${device.phone} {
    flex-direction: column;
    width: 75%;
  }
`;

export const DescArea = styled.div`
  width: 50%;
  padding: 0 2.5% 0 0;
  display: flex;

  @media only screen and ${device.phone} {
    width: 100%;
  }
`;

export const ButtonArea = styled.div`
  width: 45%;
  padding: 0 2.5% 0 2.5%;

  @media only screen and ${device.phone} {
    margin-top: 2.7rem;
    padding: 0;
    width: 100%;
  }
`;

export const Description = styled.div`
  flex: 1;
`;

export const DescTitle = styled.h2`
  font-size: 2rem;
  font-family: ${Font.font_primary};
  color: ${Color.color_black};
  margin-bottom: 5px;

  @media only screen and ${device.desktop} {
    font-size: 1.7rem;
  }

  @media only screen and ${device.tabletLandscape} {
    font-size: 2.3rem;
  }
`;
