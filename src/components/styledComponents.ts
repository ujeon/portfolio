import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "./display";

import introImage_d from "./../assets/images/014_beauty_d_03.jpg";
import introImage_t from "./../assets/images/014_beauty_t_04.jpg";
import introImage_p from "./../assets/images/014_beauty_p_04.jpg";

import mainImage from "./../assets/images/014_beauty_d_04.jpg";

//**********************************//
//*********    메인 페이지   **********//
//**********************************//
export const MainContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${mainImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
`;

export const MainBottom = styled.div`
  width: 100%
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
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
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${introImage_t});
  }

  @media only screen and ${device.mobileL} {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${introImage_p});
  }
`;

export const IntroHead = styled.div`
  padding-left:10%
  width: 90%;
`;

export const IntroTitle = styled.h1`
  font-size: 3.3rem;
  color: #ffffff;
  margin: 2% 0 2% 0%;

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
  background-color: #ffffff;
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
  background-color: #e67e22;
  border: 1px solid #e67e22;
  color: #fff;
  &:hover,
  &:active {
    background-color: #cf6d17;
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

export const SubTitle = styled.h2`
  font-size: 2rem;
  margin: 5% 0 2% 0;
  text-align: center;
  &:after {
    display: block;
    height: 2px;
    background-color: #e67e22;
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
  color: #e67e22;
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
  color: #888;

  &:hover,
  &:active {
    color: #ddd;
  }
`;

export const SocialLink = styled.a`
  text-decoration: none;
  border: 0;
  font-size: 1.1rem;
  color: #888;
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
  color: #888;
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
