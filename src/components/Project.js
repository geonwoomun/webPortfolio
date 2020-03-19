import React ,{useEffect, useRef, useCallback} from "react";
import styled from "styled-components";
import { Icon } from "antd";
import Slick from "react-slick";

const projects = [
  {
    title: "2018 DA 설계 공모대전 최우수상",
    what: "DA를 설계하여 제출 및 발표하는 대회",
    skill: ["DA", "DA#5"],
    type: "team",
    myRole: "모델링",
    imgPath: ["da1", "da2"],
    github: "https://github.com/geonwoomun/2018DA-Competition"
  },
  {
    title: "한이음 기부플랫폼",
    what: "현직자 멘토와 같이 멘토링을 하며 블록체인 기반 기부플랫폼을 만들어 봄",
    skill: [
      "react",
      "express",
      "aws S3",
      "aws ec2",
      "aws mariaDB",
      "hyperledger fabric"
    ],
    type: "team",
    myRole:
      "전체적인 서버구축 및 백엔드 작업, 모델링, fabric-sdk를 사용히여 백엔드와 fabric 연결, 전반적으로 리액트에 대해 도와줌",
    imgPath: [],
    github: "https://github.com/geonwoomun/hyperledger-prac"
  },
  {
    title: "사진공유판매 사이트",
    what: "연합동아리 DND에서 만든 사진 공유, 판매 사이트",
    skill: ["react", "express", "aws S3", "aws ec2", "aws mariaDB"],
    type: "team",
    myRole:
      "리더, 전체적인 서버 구축 및 백엔드 작업, 전반적으로 react에 대해 도와줌",
    imgPath: ["polo1", "polo2"],
    github: "https://github.com/geonwoomun/DND_Project"
  },
  {
    title: "사용자에게 원하는 컨텐츠를 추천해주는 시스템",
    what: "ai 아이디어경진대회를 하며 만든 웹",
    skill: ["php", "jquery", "konlpy", "TF-IDF", "mariaDB"],
    type: "team",
    myRole:
      "php, jquery로 된 코드 수정 및 유지보수, 데이터모델링 및 konlpy로 형태소 분석",
    imgPath: ["ai1"],
    github: "https://github.com/geonwoomun/aiIdeaCompetition"
  },
  {
    title: "롤 전적 검색 사이트",
    what: "혼자 생활코딩 코딩야학 프로젝트를 하며 만들어본 작품",
    skill: ["react-hooks", "redux", "redux-saga", "express"],
    type: "alone",
    myRole: "all",
    imgPath: ["lol1", "lol2"],
    github: "https://github.com/geonwoomun/lolMatch"
  },
  {
    title: "Hello20Thon",
    what: "온라인 해커톤 Hello20Thon에 참가하여 만든 운동관리 서비스",
    skill: ["react-hooks", "redux", "redux-saga", "Next.js"],
    type: "team",
    myRole: "frontend",
    imgPath: ["Hello20ThonPrize", "Hello20ThonMain"],
    github: "https://github.com/geonwoomun/Hello20Thon"
  },
  {
    title: "우리 동네 작은 도움 서비스",
    what: "DND 2기를 참가해서 만든 주변에서 도움을 주고받게 할 수 있는 플랫폼",
    skill: ["react-hooks", "redux", "redux-saga", "Next.js", "Spring Boot", "MySQL"],
    type: "team",
    myRole: "frontend",
    imgPath: ["DabeenCertipicate", "DabeenMain"],
    github: "https://github.com/geonwoomun/DND2_Dabeen"
  }
];

const ProjectWrapper = styled.div`
  width: 100%;
  color: black;
  & .projectTitle {
    font-size : calc(20px + 0.5vw);
  }
  & .projectBox {
    width : 80%;
    height : 70vh;
    font-size: calc(12px + 0.5vw);
  }
  & .imgBox {
      display : flex;
      justify-content : center;
  }
  & .imgBox img {
      flex : 1;
      width : 40%;
      height: 50vh;
      max-width: 400px;
  }
  & .gitIcon {
    font-size: 4vh;
    cursor: pointer;
  }
  & .gitIcon:hover{
    color : skyblue;
  }
  & a {
    text-decoration: none;
    color: white;
  }
`;
const Project = ({project}) => {
  const projectRef = useRef();
  useEffect(() => {
    project.setProjectRefs(projectRef);
  }, [projectRef]);
  const openGitHub = useCallback(address => () => {
    window.open(address);
  }, []);
  return (
    <ProjectWrapper id="project" ref={projectRef}>
      <div className = "projectTitle">
        <h2>프로젝트</h2>
      </div>
      <Slick
        initialSlide={0}
        dots={true}
        autoplay={true}
        autoplaySpeed={2500}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {projects.map((v, index) => {
          return (
            <div className= "projectBox" key={index}>
              <div>프로젝트명 : {v.title}</div>
              <div>{v.what}</div>
              <div>사용기술 : {v.skill.join(', ')}</div>
              <div>프로젝트단위 : {v.type}</div>
              <div>나의 역할 : {v.myRole}</div>
              <div>github : {v.github} <Icon className ="gitIcon" type="github" onClick={openGitHub(v.github)} /></div>
              <div className="imgBox">
              {v.imgPath.map((i, idx) => (
                <img src={`/project/${i}.png`} key={idx} />
              ))}
              </div>
            </div>
          );
        })}
      </Slick>
    </ProjectWrapper>
  );
};

export default Project;
