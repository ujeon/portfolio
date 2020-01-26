import React from "react";
import { RouteComponentProps } from "react-router-dom";

import ReactGA from "react-ga";

import {
  MainContainer,
  MainTitle,
  Button,
  MainBottom,
  StyledLink
} from "../components/styledComponents";

const Main: React.FC<RouteComponentProps> = ({
  location
}: RouteComponentProps) => {
  const page = location.pathname;

  ReactGA.set({ page });
  ReactGA.pageview(page);

  return (
    <MainContainer>
      <MainTitle>환영합니다</MainTitle>
      <MainBottom>
        <StyledLink to="/about-me">
          <Button>더 알아보기</Button>
        </StyledLink>
      </MainBottom>
    </MainContainer>
  );
};

export default Main;
