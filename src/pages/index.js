import React from 'react';
import Main from '../components/Main';
import Intro from '../components/Intro';
import Project from '../components/Project';
import styled from 'styled-components';
import MySkills from '../components/MySkills';
import Contact from '../components/Contact';

const HoemBox = styled.div`
    margin : 0;
    padding : 0;
`;
const Home = ({about, skill, contact, project}) => {
    return (
        <HoemBox>
            <Main/>
            <Intro about={about}/>
            <MySkills skill={skill}/>
            <Project project={project}/>
            <Contact contact={contact}/>
        </HoemBox>
    );
};

export default Home;