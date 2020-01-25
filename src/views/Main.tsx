import React from "react";

import ReactGA from "react-ga";

import {
  MainContainer,
  MainTitle,
  Button,
  MainBottom,
  StyledLink
} from "../components/styledComponents";

ReactGA.initialize("UA-156912055-1");
ReactGA.pageview("/");

const Main: React.FC = () => {
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
