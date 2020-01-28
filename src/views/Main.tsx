import React from "react";
import { RouteComponentProps } from "react-router-dom";

import ReactGA from "react-ga";

import {
  MainContainer,
  MainTitle,
  TextButton,
  MainBottom,
  StyledLink,
  MainImage,
  MainContentContainter
} from "../components/styledComponents";

import mainImage from "../assets/images/han-chenxu-tu_mv6p2p5U-unsplash-min.jpg";

const Main: React.FC<RouteComponentProps> = ({
  location
}: RouteComponentProps) => {
  const page = location.pathname;

  ReactGA.set({ page });
  ReactGA.pageview(page);

  return (
    <MainContainer>
      <MainContentContainter>
        <MainTitle>환영합니다</MainTitle>
        <MainBottom>
          <StyledLink to="/about-me">
            <TextButton>더 알아보기 &rarr;</TextButton>
          </StyledLink>
        </MainBottom>
      </MainContentContainter>
      <MainImage src={mainImage}></MainImage>
    </MainContainer>
  );
};

export default Main;
