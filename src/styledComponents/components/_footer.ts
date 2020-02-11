import styled from "styled-components";

import { device } from "../../data/display";

import { SocialLink, StyledLink } from "../base/utilities";

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

export const AboutMeContainder = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${SocialLink}, ${StyledLink} {
    padding: 0 10px 0 10px;
  }
`;

export const IconFooter = styled.i`
  font-size: 2.5rem;
  color: ${Color.color_grey_dark};
  padding: 0 1rem 0 1rem;

  &:hover,
  &:active {
    color: ${Color.color_secondary};
  }
`;

export const Comment = styled.p`
  font-family: "Shadows Into Light", cursive;
  font-size: 2.5rem;
`;

export const NextProjectContainer = styled.span`
  color: ${Color.color_black}
  font-family: ${Font.font_primary};

  span {
    font-size: 1.5rem;
    color: ${Color.color_grey_light};
  }
`;
