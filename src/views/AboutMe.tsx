import React, { useRef } from "react";

import {
  ContentsContainer,
  IntroContainer,
  ContentContainer,
  IntroHead,
  IntroTitle,
  SubTitle,
  Button,
  ContentHead,
  ContentBody,
  Text,
  TextSmall,
  ProjectContainer,
  Grid,
  GridItem,
  ProjectImgContainer,
  ProjectImg,
  ProjectDescriptions,
  Description,
  FooterContainer,
  Icon,
  IconFooter,
  ContactMethods,
  OtherMethods,
  SocialMediaIcons,
  SocialLink,
  CopyRight
} from "../components/styledComponents";

const AboutMe: React.FC = () => {
  const elFooter = useRef(document.createElement("div"));

  const scrollBottom = () => {
    window.scrollTo(0, elFooter.current.offsetTop);
  };

  return (
    <ContentsContainer>
      <IntroContainer>
        <IntroHead>
          <IntroTitle>안녕하세요</IntroTitle>
          <IntroTitle>제 이름은 장우전 입니다.</IntroTitle>
          <Button onClick={scrollBottom}>연락하기</Button>
        </IntroHead>
      </IntroContainer>

      <ContentContainer>
        <ContentHead>
          <SubTitle>제목</SubTitle>
        </ContentHead>
        <ContentBody>
          <Text>
            하늘은 푸르다 못해 농회색으로 캄캄하나 별들만은 또렷또렷 빛난다.
            침침한 어둠뿐만 아니라 오삭오삭 춥다. 이 육중한 기류 가운데 자조하는
            한 젊은이가 있다. 그를 나라고 불러두자. 나는 이 어둠에서 배태되고 이
            어둠에서 생장하여서 아직도 이 어둠 속에 그대로 생존하나 보다. 이제
            내가 갈 곳이 어딘지 몰라 허우적거리는 것이다. 하기는 나는 세기의
            초점인 듯 초췌하다. 얼핏 생각하기에는 내 바닥을 반듯이 받들어 주는
            것도 없고 그렇다고 내 머리를 갑박이 나려 누르는 아무것도 없는
            듯하다마는 내막은 그렇지도 않다. 나는 도무지 자유스럽지 못하다. 다만
            나는 없는 듯 있는 하루살이처럼 허공에 부유하는 한 점에 지나지
            않는다. 이것이 하루살이처럼 경쾌하다면 마침 다행할 것인데 그렇지를
            못하구나!
          </Text>
        </ContentBody>
      </ContentContainer>
      <ProjectContainer>
        <ContentHead>
          <SubTitle>제목</SubTitle>
          <Text style={{ textAlign: "center" }}>프로젝트에 대한 짧은 생각</Text>
        </ContentHead>
        <ContentBody>
          <Grid>
            <GridItem>
              <ProjectImgContainer>
                <a href="PROJECT_URL">
                  <ProjectImg
                    src={require("../assets/images/005_2_The_Egg_d_01.png")}
                    alt="프로젝트1"
                  />
                </a>
              </ProjectImgContainer>
              <ProjectDescriptions>
                <Text style={{ textAlign: "center" }}>프로젝트명</Text>
                <Description>
                  <Icon
                    className="icon ion-ios-calendar"
                    style={{ marginBottom: "1%" }}
                  ></Icon>
                  <TextSmall>9999.99.99 ~ 9999.99.99</TextSmall>
                </Description>
                <Description>
                  <Icon
                    className="icon ion-ios-filing"
                    style={{ marginBottom: "1%" }}
                  />
                  <TextSmall>간단한 프로젝트 설명을 적어주세요.</TextSmall>
                </Description>
              </ProjectDescriptions>
            </GridItem>
            <GridItem>
              <ProjectImgContainer>
                <a href="PROJECT_URL">
                  <ProjectImg
                    src={require("../assets/images/005_2_The_Egg_d_02.png")}
                    alt="프로젝트2"
                  />
                </a>
              </ProjectImgContainer>
              <ProjectDescriptions>
                <Text style={{ textAlign: "center" }}>프로젝트명</Text>
                <Description>
                  <Icon
                    className="icon ion-ios-calendar"
                    style={{ marginBottom: "1%" }}
                  ></Icon>
                  <TextSmall>9999.99.99 ~ 9999.99.99</TextSmall>
                </Description>
                <Description>
                  <Icon
                    className="icon ion-ios-filing"
                    style={{ marginBottom: "1%" }}
                  />
                  <TextSmall>간단한 프로젝트 설명을 적어주세요.</TextSmall>
                </Description>
              </ProjectDescriptions>
            </GridItem>
            <GridItem>
              <ProjectImgContainer>
                <a href="PROJECT_URL">
                  <ProjectImg
                    src={require("../assets/images/005_2_The_Egg_d_03.png")}
                    alt="프로젝트3"
                  />
                </a>
              </ProjectImgContainer>
              <ProjectDescriptions>
                <Text style={{ textAlign: "center" }}>프로젝트명</Text>
                <Description>
                  <Icon
                    className="icon ion-ios-calendar"
                    style={{ marginBottom: "1%" }}
                  ></Icon>
                  <TextSmall>9999.99.99 ~ 9999.99.99</TextSmall>
                </Description>
                <Description>
                  <Icon
                    className="icon ion-ios-filing"
                    style={{ marginBottom: "1%" }}
                  />
                  <TextSmall>간단한 프로젝트 설명을 적어주세요.</TextSmall>
                </Description>
              </ProjectDescriptions>
            </GridItem>
            <GridItem>
              <ProjectImgContainer>
                <a href="PROJECT_URL">
                  <ProjectImg
                    src={require("../assets/images/005_2_The_Egg_d_04.png")}
                    alt="프로젝트4"
                  />
                </a>
              </ProjectImgContainer>
              <ProjectDescriptions>
                <Text style={{ textAlign: "center" }}>프로젝트명</Text>
                <Description>
                  <Icon
                    className="icon ion-ios-calendar"
                    style={{ marginBottom: "1%" }}
                  ></Icon>
                  <TextSmall>9999.99.99 ~ 9999.99.99</TextSmall>
                </Description>
                <Description>
                  <Icon
                    className="icon ion-ios-filing"
                    style={{ marginBottom: "1%" }}
                  />
                  <TextSmall>간단한 프로젝트 설명을 적어주세요.</TextSmall>
                </Description>
              </ProjectDescriptions>
            </GridItem>
          </Grid>
        </ContentBody>
      </ProjectContainer>

      <FooterContainer ref={elFooter}>
        <ContactMethods>
          <OtherMethods>
            <SocialLink>Blog</SocialLink>
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
