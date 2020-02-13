import styled from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../data/display";
import * as Color from "../base/_colors";

export const Button = styled.button`
  display: inline-block;
  padding: 15px 30px;
  font-size: 1.8rem;
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

  @media only screen and ${device.phone} {
    padding: 10px 20px;
    font-size: 1.6rem;
  }
`;

export const HomeBtn = styled(Link)`
  box-sizing: border-box;
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  text-decoration: none;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
