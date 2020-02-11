import styled from "styled-components";
import { Link } from "react-router-dom";

// import { device } from "../../data/display";

import * as Color from "../base/_colors";

export const StyledLink = styled(Link)`
  text-decoration: none;
  transition: color 0.2s;

  p {
    display: inline-block;
    &:hover,
    &:active {
    color: ${Color.color_secondary};
  }
`;

export const SocialLink = styled.a`
  text-decoration: none;
  transition: color 0.2s;

  p {
    &:hover,
    &:active {
    color: ${Color.color_secondary};
  }
`;
