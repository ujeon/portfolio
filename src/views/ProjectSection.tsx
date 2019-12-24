import React from "react";

import {
  TextSmall,
  SubTitle,
  ProjectContainer,
  ProjectHead,
  Grid,
  GridItem,
  ProjectImgContainer,
  ProjectImg,
  ProjectDescriptions,
  Description,
  Icon,
  ContentBody,
  Text
} from "../components/styledComponents";

const ProjectSection: React.FC = () => {
  return (
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
  );
};

export default ProjectSection;
