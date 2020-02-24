import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import ReactGA from "react-ga";

import HeadLine from "../components/HeadLine";
import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CustomHelmet from "../components/CustomHelmet";

import { description } from "../data/introduce";

const Main: React.FC<RouteComponentProps> = ({
  location
}: RouteComponentProps) => {
  const page = location.pathname;

  ReactGA.set({ page });
  ReactGA.pageview(page);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <CustomHelmet
        title="안녕하세요. 개발을 통해 가치를 전달하고 싶은 개발자 장우전입니다."
        description="마케팅을 공부한 개발자로써, 사용자의 입장에서 코드를 작성하는 개발자 장우전이 되고 싶습니다. JavaScript, React, Node, CSS, HTML 등에 관심이 있습니다."
      ></CustomHelmet>
      <main>
        <NavBar pathname={location.pathname} />

        <HeadLine text={description} />

        <ProjectSection />

        <Footer />
      </main>
    </>
  );
};

export default Main;
