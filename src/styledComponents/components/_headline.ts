import styled from "styled-components";

import { device } from "../display";
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
  height: 95vh;

  @media only screen and ${device.desktop} {
    height: 94vh;
  }

  @media only screen and ${device.laptopL} {
    height: 93vh;
  }

  @media only screen and ${device.laptop} {
    height: 92vh;
  }

  @media only screen and ${device.tablet} {
    height: 91vh;
  }

  @media only screen and ${device.mobileL} {
    height: 90vh;
  }

  @media only screen and ${device.mobileM} {
    height: 89vh;
  }

  @media only screen and ${device.mobileS} {
    height: 88vh;
  }
`;

export const HeadLineTitle = styled.div`
  font-family: ${Font.font_primary};
  font-size: 5.8rem;
  font-weight: 900;
  width: 70%;
  color: ${Color.color_black};
  margin: 2% 0 2% 0%;
  line-height: 160%;

  span {
    color: ${Color.color_secondary};
  }

  @media only screen and ${device.desktop} {
    width: 71%;
    font-size: 5.3rem;
  }

  @media only screen and ${device.laptopL} {
    width: 72%;
    font-size: 4.8rem;
  }

  @media only screen and ${device.laptop} {
    width: 73%;
    font-size: 4.3rem;
  }

  @media only screen and ${device.tablet} {
    width: 74%;
    font-size: 3.8rem;
  }

  @media only screen and ${device.mobileL} {
    width: 75%;
    font-size: 3.3rem;
  }

  @media only screen and ${device.mobileM} {
    width: 76%;
    font-size: 2.8rem;
  }

  @media only screen and ${device.mobileS} {
    width: 77%;
    font-size: 2.3rem;
  }
`;

export const DescContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  margin-top: 5%;

  @media only screen and ${device.desktop} {
    width: 71%;
  }

  @media only screen and ${device.laptopL} {
    width: 72%;
  }

  @media only screen and ${device.laptop} {
    width: 73%;
  }

  @media only screen and ${device.tablet} {
    width: 74%;
  }

  @media only screen and ${device.mobileL} {
    flex-direction: column;
    width: 75%;
  }

  @media only screen and ${device.mobileM} {
    flex-direction: column;
    width: 76%;
  }

  @media only screen and ${device.mobileS} {
    flex-direction: column;
    width: 77%;
  }
`;

export const DescArea = styled.div`
  width: 45%;
  padding: 0 2.5% 0 0;

  display: flex;

  @media only screen and ${device.mobileL} {
    width: 100%;
  }
`;

export const ButtonArea = styled.div`
  width: 45%;
  padding: 0 2.5% 0 2.5%;

  @media only screen and ${device.mobileL} {
    margin-top: 2.7rem;
    padding: 0;
    width: 100%;
  }
`;

export const Description = styled.div`
  flex: 1;
`;

export const DescTitle = styled.h2`
  font-size: 1.6rem;
  font-family: ${Font.font_primary};
  color: ${Color.color_black};
  margin-bottom: 5px;
`;
