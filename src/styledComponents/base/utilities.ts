import styled from "styled-components";
import { Link } from "react-router-dom";

import * as Color from "../base/_colors";
import * as Font from "../base/_fonts";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${Color.color_black}
  font-family: ${Font.font_primary};

  $:link,
  $:visited {
    color: ${Color.color_black};
  }
  
  &:hover,
  $:active {
    text-decoration: none;
    color: ${Color.color_secondary};
  }
`;
