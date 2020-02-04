import styled from "styled-components";

import { device } from "../../data/display";

import * as Color from "../base/_colors";
import * as Font from "../base/_fonts";

export const FooterSection = styled.section`
  width: 100%
  background-color: ${Color.color_white};
  height: 40vh;
  box-sizing: border-box;
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  @media only screen and ${device.tablet} {
   height: 40vh;
  }

`;

export const CommentContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const SocialIconsContainer = styled.div`
  width: 15%;
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and ${device.tablet} {
    width: 25%;
  }

  @media only screen and ${device.mobileL} {
    width: 35%;
  }
`;

export const SocialLink = styled.a`
  text-decoration: none;
  border: 0;
  
  transition: color 0.2s;

  p {
    &:hover,
    &:active {
    color: #ddd;
  }

  @media only screen and ${device.tablet} {
    margin: 0 2% 0 2%
   }
 
   @media only screen and ${device.mobileL} {
    margin: 2% 4% 2% 4%
   }
`;

export const AboutMeContainder = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${SocialLink} {
    padding: 0 10px 0 10px;
  }
`;

export const IconFooter = styled.i`
  font-size: 2.5rem;
  color: ${Color.color_grey_dark};

  &:hover,
  &:active {
    color: #ddd;
  }
`;

export const Comment = styled.p`
  font-family: "Shadows Into Light", cursive;
  font-size: 2.5rem;
`;

export const NextProjectContainer = styled.p`
  color: ${Color.color_black}
  font-family: ${Font.font_primary};

  span {
    font-size: 1.5rem;
    color: ${Color.color_grey_light};
  }
`;
