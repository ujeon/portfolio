import React, { useState, useEffect, useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";

import HeadLine from "../components/HeadLine";

import {
  RelatedImgSection,
  PrimaryImgSection,
  PrimaryImgContainer,
  SecondaryImgSection,
  SecondaryImgContainer
} from "../styledComponents/components/_image";
import {
  FooterSection,
  NextProjectContainer
} from "../styledComponents/components/_footer";
import { StyledLink } from "../styledComponents/base/utilities";

import projectData from "../data/projectData.json";
import { imageData } from "../data/imageData";

const ProjectDetail: React.FC<RouteComponentProps> = ({
  location
}: RouteComponentProps) => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [excuted, setExcuted] = useState(false);

  const imgNodes: any[] = [];
  const path = location.pathname;
  const projectName = path.split("/")[1];

  let elPrimaryImg: JSX.Element | undefined;
  let elSecondaryImg: JSX.Element[] | undefined;

  let data = projectData.filter(data => {
    if (data.projectName_en === projectName) {
      return data;
    }
    return undefined;
  });

  useEffect(() => {
    const makeVisible = (num: number) => {
      window.onscroll = () => {
        if (
          imgNodes[num] &&
          window.pageYOffset + window.innerHeight > imgNodes[num].offsetTop
        ) {
          imgNodes[num].classList.add("visible");
          setCount(count + 1);
        }
      };
    };

    if (excuted === false) {
      window.scrollTo(0, 0);
      setExcuted(true);
    }

    makeVisible(count);
    setText(data[0].description);

    return () => {
      makeVisible(count);
      setText(data[0].description);
    };
  }, [data, count, imgNodes, excuted]);

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
      elPrimaryImg = (
        <PrimaryImgContainer ref={measuredRef}>
          <img src={imageData[key][0]} alt={imageData[key][0]} />
        </PrimaryImgContainer>
      );

      let remainImgs = imageData[key].slice(1);

      elSecondaryImg = remainImgs.map(data => {
        let width = Math.ceil(100 / remainImgs.length);
        return (
          <SecondaryImgContainer
            ref={measuredRef}
            width={width.toString()}
            key={data}
          >
            <img src={data} alt={data} />
          </SecondaryImgContainer>
        );
      });
      break;
    }
  }

  return (
    <div>
      <HeadLine
        text={text}
        tech_stack={data[0].tech_stack}
        date={data[0].date}
        url={data[0].url}
      ></HeadLine>
      <RelatedImgSection image={data[0].related_img} />
      <PrimaryImgSection backgroundColor={data[0].primary_color}>
        {elPrimaryImg}
      </PrimaryImgSection>
      <SecondaryImgSection backgroundColor={data[0].secondary_color}>
        {elSecondaryImg}
      </SecondaryImgSection>
      <FooterSection>
        <NextProjectContainer>
          <span>다음은,</span>
          <StyledLink to={data[0].next_project[0]}>
            {" "}
            {data[0].next_project[1]} &rarr;
          </StyledLink>
        </NextProjectContainer>
      </FooterSection>
    </div>
  );
};
export default ProjectDetail;
