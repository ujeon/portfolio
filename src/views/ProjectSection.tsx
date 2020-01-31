import React, { useEffect, useState, useCallback } from "react";

import {
  ProjectsSection,
  ProjectsContainer,
  Project,
  ImageContainer,
  ProjectImg,
  ProjectTitle,
  IconProject
} from "../styledComponents/components/_projects";

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
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
  const leftSide: any[] = [];
  const rightSide: any[] = [];
  const devergePoint = projectData.length / 2;

  useEffect(() => {
    const makeVisible = (num1: number, num2: number) => {
      window.onscroll = () => {
        if (
          leftSide[num1] &&
          window.pageYOffset + window.innerHeight > leftSide[num1].offsetTop
        ) {
          leftSide[num1].classList.add("visible");
          setLeftIndex(leftIndex + 1);
        }

        if (
          rightSide[num2] &&
          window.pageYOffset + window.innerHeight > rightSide[num2].offsetTop
        ) {
          rightSide[num2].classList.add("visible");
          setRightIndex(rightIndex + 1);
        }
      };
    };

    makeVisible(leftIndex, rightIndex);

    return () => {
      makeVisible(leftIndex, rightIndex);
    };
  }, [leftIndex, rightIndex, leftSide, rightSide]);

  const measuredLeftRef = useCallback(
    node => {
      if (node !== null) {
        leftSide.push(node);
      }
    },
    [leftSide]
  );

  const measuredRightRef = useCallback(
    node => {
      if (node !== null) {
        rightSide.push(node);
      }
    },
    [rightSide]
  );

  const projectListLeft: (JSX.Element | undefined)[] = projectData.map(
    (data, i) => {
      if (devergePoint > i) {
        return (
          <Project ref={measuredLeftRef} key={data.projectName}>
            <StyledLink to={data.projectName_en}>
              <ProjectTitle>
                {data.projectName}
                <IconProject
                  color={Color.color_black}
                  size="2"
                  className="icon ion-ios-arrow-round-forward"
                ></IconProject>
              </ProjectTitle>
            </StyledLink>

            <Text size="0.8" color={Color.color_grey_light}>
              {data.roll}
            </Text>

            <ImageContainer>
              <ProjectImg
                src={images[data.image]}
                alt={data.projectName}
                width={data.img_width}
              />
            </ImageContainer>
          </Project>
        );
      } else {
        return undefined;
      }
    }
  );

  const projectListRight: (JSX.Element | undefined)[] = projectData.map(
    (data, i) => {
      if (devergePoint <= i) {
        return (
          <Project ref={measuredRightRef} key={data.projectName}>
            <ImageContainer>
              <ProjectImg
                src={images[data.image]}
                alt={data.projectName}
                width={data.img_width}
              />
            </ImageContainer>

            <StyledLink to={data.projectName_en}>
              <ProjectTitle>
                {data.projectName}{" "}
                <IconProject
                  color={Color.color_black}
                  size="2"
                  className="icon ion-ios-arrow-round-forward"
                ></IconProject>
              </ProjectTitle>
            </StyledLink>

            <Text size="0.8" color={Color.color_grey_light}>
              {data.roll}
            </Text>
          </Project>
        );
      } else {
        return undefined;
      }
    }
  );

  return (
    <ProjectsSection>
      <ProjectsContainer>{projectListLeft}</ProjectsContainer>
      <ProjectsContainer>{projectListRight}</ProjectsContainer>
    </ProjectsSection>
  );
};

export default ProjectSection;
