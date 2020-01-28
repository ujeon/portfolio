import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { device } from "./display";

import introImage_d from "./../assets/images/alisa-olaivar-5bjgzAPKzpI-unsplash-landscape-min.png";
import introImage_t from "./../assets/images/alisa-olaivar-5bjgzAPKzpI-unsplash-portrait-medium-min.png";
import introImage_p from "./../assets/images/alisa-olaivar-5bjgzAPKzpI-unsplash-portrait-small-min.png";

import mainImage from "../assets/images/han-chenxu-tu_mv6p2p5U-unsplash-min.jpg";

import Palette from "../palette.json";

//**********************************//
//***          애니메이션           ***//
//**********************************//
const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

//**********************************//
//*********    메인 페이지   **********//
//**********************************//
export const MainContainer = styled.div`
  background-image: url(${mainImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;

  @media only screen and ${device.tablet} {
    background-size: cover;
  }
`;

export const MainImage = styled.img`
  height: inherit;
  flex: 1;

  @media only screen and ${device.tablet} {
    visibility: hidden;
    display: none;
  }
`;

export const MainContentContainter = styled.div`
  height: inherit;
  flex: 3;
  background-color: rgb(182, 87, 103);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and ${device.tablet} {
    width: 100%;
    background-color: rgba(215, 145, 171, 0.3);
    background-size: cover;
  }
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  font-family: "Do Hyeon", sans-serif;
  color: ${Palette["title-text"]};
`;

export const MainBottom = styled.div`
  width: 100%
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media only screen and ${device.tablet} {
    width: 100%;
    height: 40%;
  }
`;

//**********************************//
//*********   어바웃 페이지   **********//
//**********************************//

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

//**********************************//
//***     어바웃 페이지 - 인트로      ***//
//**********************************//

export const IntroContainer = styled.div`
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${introImage_d});
  width: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media only screen and ${device.tablet} {
    background-size: contain;
    background-position: top;
    background-repeat no-repeat;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${introImage_t});
      height: 100vh;

  }

  @media only screen and ${device.mobileL} {
    background-color: #000;
    background-size: contain;
    background-position: top;
    background-repeat no-repeat;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${introImage_p});
      height: 100vh;

  }
`;

export const IntroHead = styled.div`
  padding-left:10%
  width: 90%;
`;

export const IntroTitle = styled.h1`
  font-size: 3.3rem;
  color: ${Palette["title-text"]};
  margin: 2% 0 2% 0%;

  animation: 2s ${moveInBottom};

  @media only screen and ${device.tablet} {
    font-size: 3rem;
  }

  @media only screen and ${device.mobileL} {
    font-size: 1.9rem;
  }

  @media only screen and ${device.mobileM} {
    font-size: 1.7rem;
  }

  @media only screen and ${device.mobileS} {
    font-size: 1.5rem;
  }
`;

//**********************************//
//***     어바웃 페이지 - 내 소개     ***//
//**********************************//

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  justify-content: center;
  height: 70vh;

  @media only screen and ${device.tablet} {
    height: 90vh;
  }
`;

export const ContentHead = styled.div`
  flex: 1;
  width: 100%;
`;

export const ContentBody = styled.div`
  flex: 3;
  width: 100%;
  height: 60%
  margin-top: 3%;
`;

//**********************************//
//***     어바웃 페이지 - 프로젝트    ***//
//**********************************//

export const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 130vh;

  @media only screen and ${device.tablet} {
    height: 500vh;
  }
`;

export const ProjectHead = styled.div`
  flex: 1;
  width: 100%;

  @media only screen and ${device.tablet} {
    flex: 0.2;
  }
`;

export const Grid = styled.div`
  display: flex;
  height: 100%;

  @media only screen and ${device.tablet} {
    flex-direction: column;
  }
`;

export const GridItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectImgContainer = styled.div`
  width: 100%;
  height: 40%;
  margin: 0;
  overflow: hidden;
  background-color: #000;

  @media only screen and ${device.tablet} {
    height: 50%;
  }

  @media only screen and ${device.mobileL} {
    height: 50%;
  }

  @media only screen and ${device.mobileM} {
    height: 40%;
  }

  @media only screen and ${device.mobileS} {
    height: 0%;
  }
`;

export const ProjectImg = styled.img`
  opacity: 0.7;
  width: 100%;
  height: 100%;
  transform: scale(1.15);
  transition: transform 0.5s, opacity 0.5s;

  &:hover {
    opacity: 1;
    transform: scale(1.03);
  }
`;

export const ProjectDescriptions = styled.ul`
  width: 100%;
`;

export const Description = styled.li`
  font-size: 1.15rem;
  padding-left: 5%;
  margin-top: 5%;
`;

//**********************************//
//***         재사용 컴포넌트        ***//
//**********************************//

export const Button = styled.button`
  display: inline-block;
  padding: 10px 30px;
  font-size: 1.3rem;
  text-decoration: none;
  border-radius: 200px;
  background-color: ${Palette["main-color"]};
  border: 1px solid ${Palette["main-color"]};
  color: ${Palette["title-text"]};
  &:hover,
  &:active {
    background-color: #a04655;
  }

  &:focus {
    outline: 0;
  }

  @media only screen and ${device.mobileL} {
    padding: 10px 20px;
    font-size: 1rem;
  }

  @media only screen and ${device.mobileM} {
    padding: 10px 20px;
    font-size: 1rem;
  }

  @media only screen and ${device.mobileS} {
    padding: 7px 15px;
    font-size: 0.9rem;
  }
`;

export const TextButton = styled.div`
  display: inline-block;
  padding: 10px 30px;
  font-size: 1.3rem;
  text-decoration: none;
  color: ${Palette["title-text"]};
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  margin: 5% 0 2% 0;
  text-align: center;
  &:after {
    display: block;
    height: 2px;
    background-color: ${Palette["main-color"]};
    content: " ";
    width: 100px;
    margin: 0 auto;
    margin-top: 30px;
  }

  @media only screen and ${device.mobileL} {
    font-size: 1.6rem;
    margin-top: 10%;
  }

  @media only screen and ${device.mobileM} {
    font-size: 1.4rem;
    margin-top: 10%;
  }

  @media only screen and ${device.mobileS} {
    font-size: 1.2rem;
    margin-top: 10%;
  }
`;

export const Text = styled.p`
  font-size: 1.4rem;
  width: 80%;
  margin: 0 10% 0 10%;
  line-height: 170%;
  text-align: center;

  @media only screen and ${device.mobileL} {
    font-size: 1rem;
    margin-top: 5%;
  }
`;

export const TextSmall = styled.p`
  font-size: 1rem;
  width: 100%;
  line-height: 170%;

  @media only screen and ${device.mobileL} {
    font-size: 0.9rem;
    margin-top: 5%;
  }
`;

export const Icon = styled.i`
  font-size: 1.5rem;
  color: ${Palette["main-color"]};
`;

//**********************************//
//***      어바웃 페이지 - 푸터      ***//
//**********************************//

export const FooterContainer = styled.div`
  width: 94%;
  padding: 3%;
  background-color: #333;
  height: 8vh;
  display: flex;
  flex-direction: column;
  z-index:10;

  @media only screen and ${device.tablet} {
   height: 20vh
   justify-content: space-around;
  }

  @media only screen and ${device.mobileL} {
    height: 20vh;
    justify-content: space-around;
  }

  @media only screen and ${device.mobileM} {
    height: 25vh
    justify-content: space-around;
  }

  @media only screen and ${device.mobileS} {
    height: 30vh
    justify-content: space-around;
  }
`;

export const ContactMethods = styled.div`
  width: 90%;
  padding: 0 5% 0 5%;
  display: flex;
  justify-content: space-between;
`;

export const OtherMethods = styled.div`
  flex:1
  display: flex;
  align-items: center
`;

export const SocialMediaIcons = styled.div`
  flex:1
  display: flex;
  flex-direction: row-reverse;
`;

export const IconFooter = styled.i`
  font-size: 1.5rem;
  color: ${Palette["footer-content"]};

  &:hover,
  &:active {
    color: #ddd;
  }
`;

export const SocialLink = styled.a`
  text-decoration: none;
  border: 0;
  font-size: 1.1rem;
  color: ${Palette["footer-content"]};
  margin: 0 2.5% 0 2.5%
  transition: color 0.2s;
  
  &:hover,
  &:active {
    color: #ddd;
  }
`;

export const CopyRight = styled.div`
  width: 100%
  text-align: center;
  font-size: 0.8rem;
  color: ${Palette["footer-content"]};
  margin-top:3%
`;

//**********************************//
//***             기타            ***//
//**********************************//

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: grey;
  }
`;
