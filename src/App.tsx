import React from "react";
import { Helmet } from "react-helmet";

import { Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";

import Main from "./views/Main";
import ProjectDetail from "./views/ProjectDetail";
import AboutMe from "./views/AboutMe";

ReactGA.initialize("UA-156912055-1");

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>우전 - 포트폴리오</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="안녕하세요. 개발을 통해 가치를 전달하고 싶은 개발자 장우전의 포트폴리오입니다. 😚"
        />
        <meta name="keywords" content="우전, 장우전, ujeon, jangujeon" />
        <meta name="author" content="Ujeon" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about-me" component={AboutMe} />
        <Route exact path="/:project" component={ProjectDetail} />
      </Switch>
    </>
  );
};

export default App;
