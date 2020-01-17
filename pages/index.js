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
`;
const Home = ({about, skill, github, contact, project}) => {
    return (
        <HoemBox>
            <Main/>
            <Intro about={about}/>
            <MySkills skill={skill}/>
            <Project project={project}/>
            <Github github={github}/>
        </HoemBox>
    );
};

export default Home;