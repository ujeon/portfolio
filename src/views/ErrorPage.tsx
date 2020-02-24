import React from "react";

import CustomHelmet from "../components/CustomHelmet";

import {
  ErrorContainer,
  ErrorCode,
  ErrorMessage,
  AltMessage
} from "../styledComponents/pages/_404Error";
import { Button } from "../styledComponents/components/_button";
import { StyledLink } from "../styledComponents/base/utilities";

const ErrorPage = () => {
  return (
    <>
      <CustomHelmet
        title="페이지를 찾을 수 없습니다 (404)"
        description="요청하신 페이지를 찾을 수 없습니다. URL을 확인해주세요."
      ></CustomHelmet>
      <main>
        <ErrorContainer>
          <ErrorCode>404</ErrorCode>
          <ErrorMessage>이 페이지에는 아무것도 없어요</ErrorMessage>
          <AltMessage>대신 홈페이지로 가볼까요?</AltMessage>
          <StyledLink to="/">
            <Button>홈페이지로 가기</Button>
          </StyledLink>
        </ErrorContainer>
      </main>
    </>
  );
};

export default ErrorPage;
