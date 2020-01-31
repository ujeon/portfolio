import styled from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../display";
import * as Color from "../base/_colors";

const profileImg = require("../../assets/images/profile.png");

export const Button = styled.button`
  display: inline-block;
  padding: 15px 30px;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 2px;
  border: 0;
  color: ${Color.color_white};
  background-color: ${Color.color_secondary};

  &:hover,
  &:active {
    background-color: ${Color.color_tertiary};
  }

  &:focus {
    outline: 0;
  }

  @media only screen and ${device.mobileL} {
    padding: 10px 20px;
    font-size: 1rem;
  }

  @media only screen and ${device.mobileM} {
    padding: 10px 20px;
    font-size: 1rem;
  }

  @media only screen and ${device.mobileS} {
    padding: 7px 15px;
    font-size: 0.9rem;
  }
`;

export const TextButton = styled.div`
  display: inline-block;
  padding: 10px 30px;
  font-size: 1.3rem;
  text-decoration: none;
  color: ${Color.color_white};
`;

export const HomeBtn = styled(Link)`
  background-image: url(${profileImg});
  background-repeat:none;
  background-size:contain;
  box-sizing: border-box;
  display: inline-block
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  position: fixed;
  top: 1.1rem;
  left: 2.1rem;
  z-index:10;
  text-decoration: none;

  @media only screen and ${device.mobileL} {
    top: 1rem;
    left: 1rem;
  }
`;
