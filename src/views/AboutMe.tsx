import React, { useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import ReactGA from "react-ga";

import IntroduceSection from "./IntroduceSection";
import ProjectSection from "./ProjectSection";

import {
  ContentsContainer,
  IntroContainer,
  IntroHead,
  IntroTitle,
  Button,
  FooterContainer,
  IconFooter,
  ContactMethods,
  OtherMethods,
  SocialMediaIcons,
  SocialLink,
  CopyRight
} from "../components/styledComponents";

const AboutMe: React.FC<RouteComponentProps> = ({
  location
}: RouteComponentProps) => {
  const page = location.pathname;

  ReactGA.set({ page });
  ReactGA.pageview(page);

  const elFooter = useRef(document.createElement("div"));

  const scrollBottom = () => {
    window.scrollTo(0, elFooter.current.offsetTop);
  };

  return (
    <ContentsContainer>
      <IntroContainer>
        <IntroHead>
          <IntroTitle>안녕하세요</IntroTitle>
          <IntroTitle>제 이름은 장우전 입니다</IntroTitle>
          <Button onClick={scrollBottom}>연락하기</Button>
        </IntroHead>
      </IntroContainer>

      <IntroduceSection />
      <ProjectSection />

      <FooterContainer ref={elFooter}>
        <ContactMethods>
          <OtherMethods>
            <SocialLink href="https://medium.com/@wj9304">Blog</SocialLink>
          </OtherMethods>
          <SocialMediaIcons>
            <SocialLink href="https://github.com/ujeon?tab=repositories">
              <IconFooter className="icon ion-logo-github" />
            </SocialLink>
            <SocialLink href="https://twitter.com/wj9304">
              <IconFooter className="icon ion-logo-twitter" />
            </SocialLink>
            <SocialLink href="mailto:wj9304@gmail.com">
              <IconFooter className="icon ion-ios-mail" />
            </SocialLink>
          </SocialMediaIcons>
        </ContactMethods>
        <CopyRight>Designed & Written By 우전</CopyRight>
      </FooterContainer>
    </ContentsContainer>
  );
};

export default AboutMe;
