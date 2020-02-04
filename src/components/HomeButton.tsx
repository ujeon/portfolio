import React from "react";

import { HomeBtn } from "../styledComponents/components/_button";
import profileImg from "../assets/images/profile.png";

const HomeButton: React.FC = () => {
  return (
    <HomeBtn to="/">
      <img src={profileImg} alt="Ujeon" />
    </HomeBtn>
  );
};
export default HomeButton;
