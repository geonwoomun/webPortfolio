import React from 'react';
import Main from '../components/Main';
import Intro from '../components/Intro';
import Project from '../components/Project';
import Github from '../components/Github';
import styled from 'styled-components';
import MySkills from '../components/MySkills';

const HoemBox = styled.div`
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;
const Home = () => {
    return (
        <HoemBox>
            <Main/>
            <Intro/>
            <MySkills/>
            <Project/>
            <Github/>
        </HoemBox>
    );
};

export default Home;