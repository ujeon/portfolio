import React, { useEffect, useCallback } from "react";

import {
  ProjectsSection,
  ProjectsContainer,
  Project,
  ProjectImg,
  ProjectTitle,
  IconProject
} from "../styledComponents/components/_projects";
import {
  ImageContainer,
  BrowserTab
} from "../styledComponents/components/_image";

import { Text } from "../styledComponents/components/_typography";
import { StyledLink } from "../styledComponents/base/utilities";

import * as Color from "../styledComponents/base/_colors";

import projectData from "../data/projectData.json";

import { projectRepresentativeImg as images } from "../data/imageData";

const ProjectSection: React.FC = () => {
  const imageNodes: any[] = [];

  const divergePoint = projectData.length / 2;

  useEffect(() => {
    const viewImages = () => {
      imageNodes.forEach(el => {
        if (
          el.offsetTop &&
          window.pageYOffset + window.innerHeight > el.offsetTop + 100
        ) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", viewImages);

    return () => {
      window.removeEventListener("scroll", viewImages);
    };
  }, [imageNodes]);

  const projectRef = useCallback(
    node => {
      if (node !== null) {
        imageNodes.push(node);
      }
    },
    [imageNodes]
  );

  const projectList: (JSX.Element | undefined)[] = projectData.map(
    (data, i) => {
      if (divergePoint > i) {
        return (
          <Project ref={projectRef} key={data.projectName}>
            <StyledLink to={`projects/${data.projectName_en}`}>
              <ProjectTitle>
                {data.projectName}{" "}
                <IconProject
                  color={Color.color_black}
                  size="3"
                  className="icon ion-ios-arrow-round-forward"
                ></IconProject>
              </ProjectTitle>
            </StyledLink>

            <Text color={Color.color_grey_light}>{data.roll}</Text>

            <ImageContainer>
              <BrowserTab type={data.type}>
                <span></span>
                <span></span>
                <span></span>
              </BrowserTab>

              <ProjectImg
                src={images[data.image]}
                alt={data.projectName}
                width={data.img_width}
                type={data.type}
              />
            </ImageContainer>
          </Project>
        );
      } else {
        return (
          <Project ref={projectRef} key={data.projectName}>
            <ImageContainer>
              <BrowserTab type={data.type}>
                <span></span>
                <span></span>
                <span></span>
              </BrowserTab>
              <ProjectImg
                src={images[data.image]}
                alt={data.projectName}
                width={data.img_width}
                type={data.type}
              />
            </ImageContainer>

            <StyledLink to={`projects/${data.projectName_en}`}>
              <ProjectTitle>
                {data.projectName}{" "}
                <IconProject
                  color={Color.color_black}
                  size="3.2"
                  className="icon ion-ios-arrow-round-forward"
                ></IconProject>
              </ProjectTitle>
            </StyledLink>
            <Text color={Color.color_grey_light}>{data.roll}</Text>
          </Project>
        );
      }
    }
  );

  return (
    <ProjectsSection>
      <ProjectsContainer>
        {projectList.slice(0, divergePoint)}
      </ProjectsContainer>
      <ProjectsContainer>
        {projectList.slice(divergePoint, projectList.length)}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default ProjectSection;
