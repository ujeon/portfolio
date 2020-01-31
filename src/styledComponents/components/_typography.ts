import styled from "styled-components";

import { device } from "../display";

export const SubTitle = styled.h2``;

interface Props {
  size: string;
  color: string;
}

export const Text = styled.p<Props>`
  font-size: ${props => props.size + "rem"};
  color: ${props => props.color}
  line-height: 170%;
`;

export const TextSmall = styled.p`
  font-size: 1rem;
  width: 100%;
  line-height: 170%;

  @media only screen and ${device.mobileL} {
    font-size: 0.9rem;
    margin-top: 5%;
  }
`;
