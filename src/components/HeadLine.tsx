import React, { useRef } from "react";

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

type Schema = {
  itemProp: string;
};

type Props<T> = {
  text: string;
  tech_stack?: string;
  date?: string;
  url?: string;
  schemaInfo?: T;
};

const HeadLine: React.FC<Props<Schema>> = props => {
  const dividedText = props.text && props.text.split("*");
  const elHeadLine = useRef(document.createElement("div"));
  let elDescription: JSX.Element | undefined;
  let elButton: JSX.Element | undefined;

  if (props.url !== "") {
    elButton = (
      <a href={props.url}>
        <Button>
          더 알아보기&nbsp;
          <IconProject
            color={Color.color_white}
            size="1.7"
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
            <Text color={Color.color_grey_light}>{props.date}</Text>
          </Description>
          <Description>
            <DescTitle>기술 스택</DescTitle>
            <Text color={Color.color_grey_light}>{props.tech_stack}</Text>
          </Description>
        </DescArea>
        <ButtonArea>{elButton}</ButtonArea>
      </DescContainer>
    );
  }

  return (
    <HeadLineSection>
      <HeadLineTitle
        ref={elHeadLine}
        itemProp={props.schemaInfo && props.schemaInfo?.itemProp}
      >
        {dividedText && dividedText[0]}
        <span>{dividedText && dividedText[1]}</span>
        {dividedText && dividedText[2]}
      </HeadLineTitle>
      {elDescription}
    </HeadLineSection>
  );
};

export default HeadLine;
