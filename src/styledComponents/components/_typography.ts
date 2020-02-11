import styled from "styled-components";

import { device } from "../../data/display";

export const SubTitle = styled.h2``;

interface Props {
  size: string;
  color: string;
}

export const Text = styled.p<Props>`
  font-size: ${props => props.size + "rem"};
  color: ${props => props.color}
  line-height: 170%;

  @media only screen and ${device.mobileL} {
    font-size: ${props => Number(props.size) - 0.1 + "rem"};
  }
`;
