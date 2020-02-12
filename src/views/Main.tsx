import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import ReactGA from "react-ga";

import HeadLine from "../components/HeadLine";
import ProjectSection from "./ProjectSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

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
    <main>
      <NavBar pathname={location.pathname} />

      <HeadLine text={description} />

      <ProjectSection />

      <Footer />
    </main>
  );
};

export default Main;
