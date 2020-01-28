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

import projectData from "../data/projectData.json";

import uritube_img from "../assets/images/uritube-screenshot-min.png";
import secondhand_img from "../assets/images/secondhand-screenshot-min.png";
import misinterpreter_img from "../assets/images/misinterpreter-screenshot-min.png";
import gdflower_img from "../assets/images/geumhwafood-screenshot-min.png";

interface Images {
  [uritube: string]: string;
  secondhand: string;
  misinterpreter: string;
  gdflower: string;
}

const images: Images = {
  uritube: uritube_img,
  secondhand: secondhand_img,
  misinterpreter: misinterpreter_img,
  gdflower: gdflower_img
};

const ProjectSection: React.FC = () => {
  const projectList: JSX.Element[] = projectData.map(data => {
    return (
      <GridItem key={data.projectName}>
        <ProjectImgContainer>
          <a href={data.url}>
            <ProjectImg src={images[data.image]} alt={data.projectName} />
          </a>
        </ProjectImgContainer>
        <ProjectDescriptions>
          <Text style={{ textAlign: "center" }}>{data.projectName}</Text>
          <Description>
            <Icon
              className="icon ion-ios-calendar"
              style={{ marginBottom: "1%" }}
            ></Icon>
            <TextSmall>{data.date}</TextSmall>
          </Description>
          <Description>
            <Icon
              className="icon ion-ios-filing"
              style={{ marginBottom: "1%" }}
            />
            <TextSmall>{data.description}</TextSmall>
          </Description>
        </ProjectDescriptions>
      </GridItem>
    );
  });

  return (
    <ProjectContainer>
      <ProjectHead>
        <SubTitle>프로젝트를 소개합니다.</SubTitle>
        <Text style={{ textAlign: "center" }}>
          꾸준하게 프로젝트를 진행하려 노력하고 있습니다.
        </Text>
      </ProjectHead>
      <ContentBody>
        <Grid>{projectList}</Grid>
      </ContentBody>
    </ProjectContainer>
  );
};

export default ProjectSection;
