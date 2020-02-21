import React from "react";

import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Error</title>
        <meta name="prerender-status-code" content="404" />
        <meta charSet="utf-8" />
      </Helmet>
      <div>페이지를 찾을 수 없습니다.</div>
    </>
  );
};

export default ErrorPage;
