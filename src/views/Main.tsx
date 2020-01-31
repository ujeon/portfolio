import React from "react";
import { RouteComponentProps } from "react-router-dom";
import ReactGA from "react-ga";

import HeadLine from "../components/HeadLine";
import ProjectSection from "./ProjectSection";
import Footer from "../components/Footer";

import { description } from "../data/introduce";

const Mainx: React.FC<RouteComponentProps> = ({
  location
}: RouteComponentProps) => {
  const page = location.pathname;

  ReactGA.set({ page });
  ReactGA.pageview(page);

  // const scrollBottom = () => {
  //   window.scrollTo(0, elFooter.current.offsetTop);
  // };
  return (
    <main>
      <HeadLine text={description} />

      <ProjectSection />

      <Footer />
    </main>
  );
};

export default Mainx;
