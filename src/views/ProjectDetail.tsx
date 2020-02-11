import React, { useState, useEffect, useCallback, useRef } from "react";
import { RouteComponentProps } from "react-router-dom";

import ReactGA from "react-ga";

import HeadLine from "../components/HeadLine";

import {
  RelatedImgSection,
  PrimaryImgSection,
  PrimaryImgContainer,
  SecondaryImgSection,
  SecondaryImgContainer,
  ImageContainer,
  BrowserTab
} from "../styledComponents/components/_image";
import {
  FooterSection,
  NextProjectContainer
} from "../styledComponents/components/_footer";
import { StyledLink } from "../styledComponents/base/utilities";
import { Text } from "../styledComponents/components/_typography";
import * as Color from "../styledComponents/base/_colors";

import projectData from "../data/projectData.json";
import { imageData } from "../data/imageData";

const ProjectDetail: React.FC<RouteComponentProps> = ({
  location
}: RouteComponentProps) => {
  const page = location.pathname;

  ReactGA.set({ page });
  ReactGA.pageview(page);

  const [count, setCount] = useState(0);
  const [excuted, setExcuted] = useState(false);
  const [isImagesViewed, setIsImagesViewed] = useState(false);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const prevCurrentPathRef = useRef("");

  const imgNodes: any[] = [];
  const path = location.pathname;
  const projectName = path.split("/")[1];

  let elPrimaryImg: JSX.Element | undefined;
  let elSecondaryImg: JSX.Element[] | undefined;
  let relatedImg: string | undefined;

  let data = projectData.filter(data => {
    if (data.projectName_en === projectName) {
      return data;
    }
    return undefined;
  });

  useEffect(() => {
    setCurrentPath(location.pathname);

    if (currentPath !== prevCurrentPathRef.current) {
      setCount(0);
      imgNodes.forEach(el => {
        el.classList.remove("visible");
      });
      prevCurrentPathRef.current = currentPath;
      setExcuted(false);
      setIsImagesViewed(false);
    }

    if (excuted === false) {
      window.scrollTo(0, 0);
      setExcuted(true);
    }

    const viewImages = () => {
      if (!imgNodes[imgNodes.length - 1].classList.value.includes("visible")) {
        imgNodes.forEach(el => {
          if (
            el.offsetTop &&
            window.pageYOffset + window.innerHeight > el.offsetTop
          ) {
            el.classList.add("visible");
          }
        });
      } else {
        setIsImagesViewed(true);
      }
    };

    if (!isImagesViewed) {
      window.addEventListener("scroll", viewImages);
    } else {
      window.removeEventListener("scroll", viewImages);
    }

    return () => {
      window.removeEventListener("scroll", viewImages);
    };
  }, [
    data,
    count,
    imgNodes,
    excuted,
    currentPath,
    location.pathname,
    isImagesViewed
  ]);

  const measuredRef = useCallback(
    node => {
      if (node !== null) {
        imgNodes.push(node);
      }
    },
    [imgNodes]
  );

  for (let key in imageData) {
    if (key === projectName) {
      relatedImg = imageData[key].relatedImg[0];
      elPrimaryImg = (
        <PrimaryImgContainer ref={measuredRef} type={data[0].type}>
          <ImageContainer>
            <BrowserTab type={data[0].type}>
              <span></span>
              <span></span>
              <span></span>
            </BrowserTab>
            <img
              src={imageData[key].projectImg[0]}
              alt={imageData[key].projectImg[0]}
            />
          </ImageContainer>
        </PrimaryImgContainer>
      );

      let remainImgs = imageData[key].projectImg.slice(1);

      elSecondaryImg = remainImgs.map(el => {
        let width = Math.ceil(100 / remainImgs.length);
        return (
          <SecondaryImgContainer
            ref={measuredRef}
            width={width.toString()}
            key={el}
            type={data[0].type}
          >
            <ImageContainer>
              <BrowserTab type={data[0].type}>
                <span></span>
                <span></span>
                <span></span>
              </BrowserTab>
              <img src={el} alt={el} />
            </ImageContainer>
          </SecondaryImgContainer>
        );
      });
      break;
    }
  }

  return (
    <div>
      <HeadLine
        text={data[0].description}
        tech_stack={data[0].tech_stack}
        date={data[0].date}
        url={data[0].url}
      ></HeadLine>
      <RelatedImgSection image={relatedImg} />
      <PrimaryImgSection backgroundColor={data[0].primary_color}>
        {elPrimaryImg}
      </PrimaryImgSection>
      <SecondaryImgSection backgroundColor={data[0].secondary_color}>
        {elSecondaryImg}
      </SecondaryImgSection>
      <FooterSection>
        <NextProjectContainer>
          <span>다음은,&nbsp;</span>
          <StyledLink to={data[0].next_project[0]}>
            <Text size="1.5" color={Color.color_black}>
              {data[0].next_project[1]} &rarr;
            </Text>
          </StyledLink>
        </NextProjectContainer>
      </FooterSection>
    </div>
  );
};
export default ProjectDetail;
