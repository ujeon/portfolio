import styled from "styled-components";

import { device } from "../../data/display";

export const SubTitle = styled.h2``;

interface Props {
  color: string;
}

export const Text = styled.p<Props>`
  font-size: 1.8rem;
  color: ${props => props.color};

  @media only screen and ${device.desktop} {
    font-size: 1.6rem;
  }

  @media only screen and ${device.tabletLandscape} {
    font-size: 2rem;
  }

  @media only screen and ${device.tabletPortrait} {
    font-size: 2.2rem;
  }

  @media only screen and ${device.phone} {
    font-size: 2rem;
  }
`;
