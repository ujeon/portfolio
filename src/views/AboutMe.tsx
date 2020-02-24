import React, { useEffect, useRef, useState, useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CustomHelmet from "../components/CustomHelmet";

import {
  HeaderSection,
  Name,
  IntroSection,
  IntroContainer,
  SectionTitle,
  Char,
  FeaturesSection,
  FeatureContainer,
  FeaturesList,
  Feature
} from "../styledComponents/pages/_aboutMe";
import { Text } from "../styledComponents/components/_typography";

import * as Introduce from "../data/introduce";
import * as Color from "../styledComponents/base/_colors";

import { profileImgData } from "../data/imageData";
import { prosCons } from "../data/prosCons";

const AboutMe: React.FC<RouteComponentProps> = ({
  location
}: RouteComponentProps) => {
  const elName = useRef(document.createElement("div"));
  const elTextContainer = useRef(document.createElement("div"));
  const elText = useRef(document.createElement("p"));
  const elImage = useRef(document.createElement("img"));

  const [excuted, setExcuted] = useState(false);
  const [isTitleViewed, setIsTitleViewed] = useState(false);
  const [isTextViewed, setIsTextViewed] = useState(false);
  const [isImageViewed, setIsImageViewed] = useState(false);

  let titleArr: JSX.Element[] | string[] = Introduce.introTitle.split("");
  let cons: JSX.Element[] | string[] = prosCons.cons;
  let pros: JSX.Element[] | string[] = prosCons.pros;

  let charNodes: any[] = [];
  let featureNodes: any[] = [];

  useEffect(() => {
    if (!excuted) {
      window.scrollTo(0, 0);
      setExcuted(true);
    }

    const viewTitle = () => {
      if (
        !charNodes[charNodes.length - 1].classList.value.includes("visible")
      ) {
        if (window.pageYOffset - 30 > elTextContainer.current.offsetTop) {
          charNodes.forEach((node, i) => {
            let timing = 20 * i;
            setTimeout(() => {
              node.classList.add("visible");
            }, timing);
          });
          setIsTitleViewed(true);
        }
      }
    };

    const viewText = () => {
      if (!elText.current.classList.value.includes("visible")) {
        if (
          elTextContainer.current &&
          window.pageYOffset - 30 > elTextContainer.current.offsetTop
        ) {
          elText.current.classList.add("visible");
          setIsTextViewed(true);
        }
      }
    };

    const viewImage = () => {
      if (!elImage.current.classList.value.includes("visible")) {
        if (
          elTextContainer.current &&
          window.pageYOffset - 30 > elTextContainer.current.offsetTop
        ) {
          elImage.current.classList.add("visible");
          setIsImageViewed(true);
        }
      }
    };

    const viewFeatures = () => {
      featureNodes.forEach(el => {
        if (
          el.offsetTop &&
          window.pageYOffset + window.innerHeight >
            el.offsetTop +
              el.offsetParent.offsetTop +
              el.offsetParent.offsetParent.offsetTop
        ) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    };

    if (!isTitleViewed) {
      window.addEventListener("scroll", viewTitle);
    } else {
      window.removeEventListener("scroll", viewTitle);
    }

    if (!isTextViewed) {
      window.addEventListener("scroll", viewText);
    } else {
      window.removeEventListener("scroll", viewText);
    }

    if (!isImageViewed) {
      window.addEventListener("scroll", viewImage);
    } else {
      window.removeEventListener("scroll", viewImage);
    }

    window.addEventListener("scroll", viewFeatures);

    return () => {
      window.removeEventListener("scroll", viewTitle);
      window.removeEventListener("scroll", viewText);
      window.removeEventListener("scroll", viewImage);
      window.removeEventListener("scroll", viewFeatures);
    };
  }, [
    elName,
    charNodes,
    excuted,
    featureNodes,
    isTitleViewed,
    isTextViewed,
    isImageViewed
  ]);

  const charRef = useCallback(
    node => {
      if (node !== null) {
        charNodes.push(node);
      }
    },
    [charNodes]
  );

  const prosRef = useCallback(
    node => {
      if (node !== null) {
        featureNodes.push(node);
      }
    },
    [featureNodes]
  );

  titleArr = titleArr.map((char, i) => {
    let space = titleArr[i - 1] === " " ? "true" : "false";
    return (
      <Char key={`${char}-${i}`} ref={charRef} letterSpace={space}>
        {char}
      </Char>
    );
  });

  cons = cons.map((phrase, i) => {
    return (
      <Feature key={`${phrase}-${i}`} ref={prosRef}>
        <Text color={Color.color_black}>{phrase}</Text>
      </Feature>
    );
  });

  pros = pros.map((phrase, i) => {
    return (
      <Feature key={`${phrase}-${i}`} ref={prosRef}>
        <Text color={Color.color_black}>{phrase}</Text>
      </Feature>
    );
  });

  return (
    <>
      <CustomHelmet
        title="개발자 장우전을 소개합니다"
        description="사용하는 사람의 입장을 고민하며 개발하는 다른 많은 개발자들 처럼, 사용자를 생각하며 코드를 작성하는 개발자가 되고 싶습니다."
      ></CustomHelmet>
      <main>
        <NavBar pathname={location.pathname} />
        <HeaderSection>
          <Name>
            <span ref={elName}>Jang Ujeon</span>
          </Name>
        </HeaderSection>

        <IntroSection>
          <IntroContainer ref={elTextContainer}>
            <SectionTitle>{titleArr}</SectionTitle>
            <Text ref={elText} color={Color.color_black}>
              '고객의 입장에서 제품을 만들어야 한다', 대학교에서 마케팅을
              공부하며 기억에 남는 말 중 하나입니다. 간단한 문장이지만,
              실천하기에는 무척이나 어려운 말이지요. 그렇지만 수많은 기업은
              고객들의 입장에서 제품을 만들기 위해 노력하고 있습니다.
              <br />
              프로그래밍을 공부하고 프로젝트를 진행하면서, 그동안 무심코
              사용했던 웹서비스, 어플리케이션이 사실은 여러 사람의 '어떻게 하면
              사용자가 편리하게 사용할 수 있을까?'라는 고민 끝에 만들어진
              결과라는 것을 알게 되었습니다.
              <br />
              사용자의 입장에서 서비스를 만들려고 노력하는 많은 개발자 처럼, 저
              역시도 사용자의 입장에서 코드를 작성하는 개발자가 되고 싶습니다.
            </Text>
          </IntroContainer>
          <img ref={elImage} src={profileImgData.ujeon_half} alt="profile1" />
        </IntroSection>

        <FeaturesSection>
          <FeatureContainer ref={elTextContainer}>
            <SectionTitle>저는 이런 점들이 부족해요</SectionTitle>
            <FeaturesList>{cons}</FeaturesList>

            <SectionTitle>하지만 이런 장점들이 있어요</SectionTitle>
            <FeaturesList>{pros}</FeaturesList>
          </FeatureContainer>
        </FeaturesSection>

        <Footer />
      </main>
    </>
  );
};

export default AboutMe;
