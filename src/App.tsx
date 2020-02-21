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
        <title>
          안녕하세요. 개발을 통해 가치를 전달하고 싶은 개발자 장우전의
          포트폴리오입니다.
        </title>
        <meta charSet="utf-8" />
        <meta name="description" content="마케팅을 공부한 개발자로써, 사용자의 입장에서 코드를 작성하는 개발자가 되고 싶습니다. JavaScript, React, Node, CSS, HTML 등에 관심이 있습니다." />
        <meta name="keywords" content="우전, 장우전, ujeon, jangujeon, 개발자, React, JavaScript, CSS, HTML, 우리튜브, 세컨핸드, 금화푸드, 오역자들, uritube, secondhand, goldflower, misinterpreter" />
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
