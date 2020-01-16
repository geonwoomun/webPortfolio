import React from 'react';
import styled from 'styled-components';

const projects = [
    {
        title : "2018 DA 설계 공모대전 최우수상",
        what : "DA를 설계하여 제출 및 발표하는 대회",
        skill: ["DA", "DA#5",],
        type : "team",
        myRole : "모델링",
        imgPath : ""
    },
    {
        title : "한이음 기부플랫폼",
        what : "DA를 설계하여 제출 및 발표하는 대회",
        skill: ["react", "express", "aws S3", "aws ec2", "aws mariaDB", "hyperledger fabric"],
        type : "team",
        myRole : "전체적인 서버구축 및 백엔드 작업, 모델링, fabric-sdk를 사용히여 백엔드와 fabric 연결, 전반적으로 리액트에 대해 도와줌",
        imgPath : ""
    },
    {
        title : "사진공유판매 사이트",
        what : "연합동아리 DND에서 만든 작품",
        skill: ["react", "express", "aws S3", "aws ec2", "aws mariaDB"],
        type : "team",
        myRole : "리더, 전체적인 서버 구축 및 백엔드 작업, 전반적으로 react에 대해 도와줌",
        imgPath : ""
    },
    {
        title : "사용자에게 원하는 컨텐츠를 추천해주는 시스템",
        what : "ai 아이디어경진대회를 하며 만든 웹앱",
        skill: ["php", "jquery", "konlpy", "TF-IDF", "mariaDB"],
        type : "team",
        myRole : "php, jquery로 된 코드 수정 및 유지보수, 데이터모델링 및 konlpy로 형태소 분석",
        imgPath : ""
    },
    {
        title : "롤 전적 검색 사이트",
        what : "혼자 생활코딩 코딩야학 프로젝트를 하며 만들어본 작품",
        skill: ["react-hooks", "redux", "redux-saga", "express"],
        type : "alone",
        myRole : "all",
        imgPath : ""
    },
];

const ProjectWrapper = styled.div`
    width : 100%;
    height : 90vh;
`;
const Project = () => {
    return (
        <ProjectWrapper>
        
        </ProjectWrapper>
    );
};

export default Project;