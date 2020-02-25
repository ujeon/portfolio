import React, { useEffect, useCallback, useMemo } from "react";

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

import uritube_img from "../assets/images/uritube/uritube-screenshot-min1.png";
import secondhand_img from "../assets/images/secondhand/secondhand-screenshot-min1.png";
import misinterpreter_img from "../assets/images/misinterpreter/misinterpreter-screenshot-min1.png";
import gdflower_img from "../assets/images/gdflower/geumhwafood-screenshot-min1.png";

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

  const projectListLeft: (JSX.Element | undefined)[] = useMemo(() => {
    return projectData.map((data, i) => {
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
        return undefined;
      }
    });
  }, [divergePoint, projectRef]);

  const projectListRight: (JSX.Element | undefined)[] = useMemo(() => {
    return projectData.map((data, i) => {
      if (divergePoint <= i) {
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
      } else {
        return undefined;
      }
    });
  }, [divergePoint, projectRef]);

  return (
    <ProjectsSection>
      <ProjectsContainer>{projectListLeft}</ProjectsContainer>
      <ProjectsContainer>{projectListRight}</ProjectsContainer>
    </ProjectsSection>
  );
};

export default ProjectSection;
