import { keyframes } from "styled-components";
import * as Color from "../base/_colors";

export const moveInBottomBig = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0px,120px,0px);
  }

  100% {
    opacity: 1;
    transform: translate3d(0px,0px,0px);
  }
`;

export const moveInBottomSmall = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0px,15px,0px);
  }

  100% {
    opacity: 1;
    transform: translate3d(0px,0px,0px);
  }
`;

export const moveCharInBottomSmall = keyframes`
  0% {
    opacity: 0;
    transform: translate(0px,100%) matrix(1, 0.09, 0, 1, 0, 0);
    transform-origin: center;
  }
  
  100% {
    opacity: 1;
    transform: matrix(1,0,0,1,0,0);
    transform-origin: center;
  }
`;

export const LeftToRight = keyframes`
  0% {
    opacity: 0;
    border: 1px solid ${Color.color_secondary};
  }

 
  100% {
    opacity: 1;
    border: 1px solid ${Color.color_secondary};
  }
`;
