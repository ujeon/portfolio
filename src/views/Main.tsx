import React from "react";

import {
  MainContainer,
  MainTitle,
  Button,
  MainBottom,
  StyledLink
} from "../components/styledComponents";

const Main: React.FC = () => {
  return (
    <MainContainer>
      <MainTitle>인사문구</MainTitle>
      <MainBottom>
        <StyledLink to="/portfolio/about-me">
          <Button>더 알아보기</Button>
        </StyledLink>
      </MainBottom>
    </MainContainer>
  );
};

export default Main;
