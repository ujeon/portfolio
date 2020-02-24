import styled from "styled-components";

import { device } from "../../data/display";

import * as Font from "../base/_fonts";
// import * as Color from "../base/_colors";

export const ErrorContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorCode = styled.h1`
  font-family: ${Font.font_primary};
  font-weight: 300;
  font-size: 10rem;
`;

export const ErrorMessage = styled.p`
  font-family: ${Font.font_primary};
  font-weight: 300;
  font-size: 2rem;
`;

export const AltMessage = styled.p`
  font-family: ${Font.font_primary};
  font-weight: 500;
  font-size: 3rem;
  display: inline-block;
  margin: 3% 0 1% 0;

  @media only screen and ${device.phone} {
    margin: 5% 0 3% 0;
  }
`;
