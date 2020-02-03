import styled from "styled-components";

// import { device } from "../display";

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
