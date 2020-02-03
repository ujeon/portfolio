import React, { useRef, useEffect } from "react";

import {
  HeadLineSection,
  HeadLineTitle,
  DescContainer,
  DescArea,
  ButtonArea,
  Description,
  DescTitle
} from "../styledComponents/components/_headline";
import { Button } from "../styledComponents/components/_button";
import { Text } from "../styledComponents/components/_typography";
import { IconProject } from "../styledComponents/components/_projects";

import * as Color from "../styledComponents/base/_colors";

type Props = {
  text: string;
  tech_stack?: string;
  date?: string;
  url?: string;
};

const HeadLine: React.FC<Props> = props => {
  const elHeadLine = useRef(document.createElement("div"));
  let elDescription: JSX.Element | undefined;
  let elButton: JSX.Element | undefined;

  if (props.url !== "") {
    elButton = (
      <a href={props.url}>
        <Button>
          더 알아보기{"  "}
          <IconProject
            color={Color.color_white}
            size="1.1"
            className="icon ion-ios-arrow-round-forward"
          ></IconProject>
        </Button>
      </a>
    );
  }

  if (props.date && props.tech_stack) {
    elDescription = (
      <DescContainer>
        <DescArea>
          <Description>
            <DescTitle>기간</DescTitle>
            <Text size="1.6" color={Color.color_grey_light}>
              {props.date}
            </Text>
          </Description>
          <Description>
            <DescTitle>기술 스택</DescTitle>
            <Text size="1.6" color={Color.color_grey_light}>
              {props.tech_stack}
            </Text>
          </Description>
        </DescArea>
        <ButtonArea>{elButton}</ButtonArea>
      </DescContainer>
    );
  }

  useEffect(() => {
    elHeadLine.current.innerHTML = props.text;
  });

  return (
    <HeadLineSection>
      <HeadLineTitle ref={elHeadLine}>{props.text}</HeadLineTitle>
      {elDescription}
    </HeadLineSection>
  );
};

export default HeadLine;
