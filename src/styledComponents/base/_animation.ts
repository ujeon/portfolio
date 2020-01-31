import { keyframes } from "styled-components";

export const moveInBottomBig = keyframes`
  0% {
    opacity: 0;
    transform: translateY(120px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
