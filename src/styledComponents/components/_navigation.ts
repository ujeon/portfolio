import styled from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../data/display";

import * as Color from "../base/_colors";
import * as Font from "../base/_fonts";

import { LeftToRight } from "../base/_animation";

export const Navigation = styled.nav`
  width: 100%;
  height: 7vh;
  background-color: #fff;
  opacity: 0.95;

  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 10;

  padding: 1% 2%;

  @media only screen and ${device.mobileL} {
    height: 8vh;

    padding: 1% 5%;
  }
`;

export const BackButton = styled.i`
  font-size: 3rem;
  color: ${Color.color_black};
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const TextUnderLine = styled.span`
  width: 100%;
  height: 0;
  position: absolute;
  top: 100%;
`;

export const TextButton = styled(Link)`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: ${Color.color_black};
  font-size: 1.7rem;
  font-family: ${Font.font_primary};
  font-weight: 500;
  text-decoration: none;
  position: relative;

  &:not(:first-child) {
    margin-left: 2rem;
  }

  &:hover {
    ${TextUnderLine} {
      animation: 0.7s ${LeftToRight} forwards;
    }
  }

  @media only screen and ${device.mobileL} {
    font-size: 1.5rem;

    &:not(:first-child) {
      margin-left: 1.5rem;
    }
  }
`;
