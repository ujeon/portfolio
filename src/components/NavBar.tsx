import React from "react";

import {
  Navigation,
  TextButton,
  TextUnderLine,
  ButtonContainer,
  BackButton
} from "../styledComponents/components/_navigation";

type NavBarProps = {
  pathname: string;
  back?: () => void;
};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  const buttons = props.pathname !== "/about-me" && props.pathname === "/" && (
    <ButtonContainer>
      <TextButton to="about-me">
        <span>About me</span>
        <TextUnderLine>&nbsp;</TextUnderLine>
      </TextButton>
    </ButtonContainer>
  );

  const backward = props.pathname !== "/about-me" &&
    props.pathname !== "/about-me/" &&
    props.pathname !== "/" && (
      <BackButton
        className="icon ion-ios-arrow-round-back"
        onClick={props.back}
      />
    );

  return (
    <Navigation>
      {backward}

      <TextButton to="/">
        <span> UJEON</span>
      </TextButton>

      {buttons}
    </Navigation>
  );
};

export default NavBar;
