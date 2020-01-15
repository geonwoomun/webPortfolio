import React from 'react';
import Intro from '../components/Intro';
import Project from '../components/Project';
import Github from '../components/Github';
import styled from 'styled-components';

const HoemBox = styled.div`
    margin : 30px;
    padding : 0;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;
const Home = () => {
    return (
        <HoemBox>
            <Intro/>
            <Project/>
            <Github/>
        </HoemBox>
    );
};

export default Home;