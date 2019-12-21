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
  ProjectHead,
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
          <IntroTitle>제 이름은 장우전 입니다</IntroTitle>
          <Button onClick={scrollBottom}>연락하기</Button>
        </IntroHead>
      </IntroContainer>

      <ContentContainer>
        <ContentHead>
          <SubTitle>개발을 통해 가치를 전달하고 싶습니다.</SubTitle>
        </ContentHead>
        <ContentBody>
          <Text>
            세상에 존재하는 많은 직업들은 저마다 사회에 필요한 가치를
            전달합니다.
          </Text>
          <br></br>
          <Text>
            그리고 저는 개발자로써 사회에 긍정적인 가치를 전달하려고 합니다.
          </Text>
          <br></br>
          <Text>아직 서투르고 부족한 점이 많은 초보 개발자이지만,</Text>
          <br></br>
          <Text>
            어제보다는 오늘, 오늘보다는 내일에 더 성숙한 개발자가 되기 위해
            노력하고 있습니다.
          </Text>
        </ContentBody>
      </ContentContainer>

      <ProjectContainer>
        <ProjectHead>
          <SubTitle>프로젝트를 소개합니다.</SubTitle>
          <Text style={{ textAlign: "center" }}>
            꾸준하게 프로젝트를 진행하려 노력하고 있습니다.
          </Text>
        </ProjectHead>
        <ContentBody>
          <Grid>
            <GridItem>
              <ProjectImgContainer>
                <a href="https://github.com/ujeon/til/blob/master/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%9A%8C%EA%B3%A0%EB%A1%9D/1st-project.md">
                  <ProjectImg
                    src={require("../assets/images/uritube-screenshot.png")}
                    alt="Uritube"
                  />
                </a>
              </ProjectImgContainer>
              <ProjectDescriptions>
                <Text style={{ textAlign: "center" }}>우리튜브</Text>
                <Description>
                  <Icon
                    className="icon ion-ios-calendar"
                    style={{ marginBottom: "1%" }}
                  ></Icon>
                  <TextSmall>2019년 09월</TextSmall>
                </Description>
                <Description>
                  <Icon
                    className="icon ion-ios-filing"
                    style={{ marginBottom: "1%" }}
                  />
                  <TextSmall>
                    특정한 주제의 동영상을 시청하고,
                    <br />
                    사용자들끼리 이야기할 수 있는 웹사이트
                    <br />
                    입니다.
                  </TextSmall>
                </Description>
              </ProjectDescriptions>
            </GridItem>
            <GridItem>
              <ProjectImgContainer>
                <a href="https://github.com/ujeon/til/blob/master/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%9A%8C%EA%B3%A0%EB%A1%9D/2nd-project.md">
                  <ProjectImg
                    src={require("../assets/images/secondhand-screenshot.png")}
                    alt="Secondhand"
                  />
                </a>
              </ProjectImgContainer>
              <ProjectDescriptions>
                <Text style={{ textAlign: "center" }}>세컨핸드</Text>
                <Description>
                  <Icon
                    className="icon ion-ios-calendar"
                    style={{ marginBottom: "1%" }}
                  ></Icon>
                  <TextSmall>2019년 10월</TextSmall>
                </Description>
                <Description>
                  <Icon
                    className="icon ion-ios-filing"
                    style={{ marginBottom: "1%" }}
                  />
                  <TextSmall>
                    중고 유모차 거래자들이 합리적인 가격결정을 할 수 있도록 가격
                    정보를 제공하는 서비스입니다.
                  </TextSmall>
                </Description>
              </ProjectDescriptions>
            </GridItem>
            <GridItem>
              <ProjectImgContainer>
                {/* <a href="PROJECT_URL"> */}
                <ProjectImg
                  src={require("../assets/images/geumhwafood-screenshot.png")}
                  alt="geumhwafood"
                />
                {/* </a> */}
              </ProjectImgContainer>
              <ProjectDescriptions>
                <Text style={{ textAlign: "center" }}>금화푸드 재고관리</Text>
                <Description>
                  <Icon
                    className="icon ion-ios-calendar"
                    style={{ marginBottom: "1%" }}
                  ></Icon>
                  <TextSmall>2019년 11월 ~</TextSmall>
                </Description>
                <Description>
                  <Icon
                    className="icon ion-ios-filing"
                    style={{ marginBottom: "1%" }}
                  />
                  <TextSmall>
                    베이커리 업체의 재고조회, 관리를 돕는 웹사이트입니다.
                  </TextSmall>
                </Description>
              </ProjectDescriptions>
            </GridItem>
            <GridItem>
              <ProjectImgContainer>
                {/* <a href="PROJECT_URL"> */}
                <ProjectImg
                  src={require("../assets/images/misinterpreter-screenshot.png")}
                  alt="misinterpreters"
                />
                {/* </a> */}
              </ProjectImgContainer>
              <ProjectDescriptions>
                <Text style={{ textAlign: "center" }}>오역자들</Text>
                <Description>
                  <Icon
                    className="icon ion-ios-calendar"
                    style={{ marginBottom: "1%" }}
                  ></Icon>
                  <TextSmall>2019년 11월 ~</TextSmall>
                </Description>
                <Description>
                  <Icon
                    className="icon ion-ios-filing"
                    style={{ marginBottom: "1%" }}
                  />
                  <TextSmall>
                    주 1회 영문 기술 블로그를 번역하는 스터디입니다.
                  </TextSmall>
                </Description>
              </ProjectDescriptions>
            </GridItem>
          </Grid>
        </ContentBody>
      </ProjectContainer>

      <FooterContainer ref={elFooter}>
        <ContactMethods>
          <OtherMethods>
            <SocialLink href="https://github.com/ujeon/til">Blog</SocialLink>
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
