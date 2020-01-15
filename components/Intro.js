import React from 'react';
import styled from 'styled-components';

const IntroBox = styled.div`
    display : flex;
    justify-content : space-around;
    align-items : center;
    width : 100%;
    & div{
        width : 200px;
        height : 200px;
        border : 1px solid white;
        border-radius : 50%;
    }
    & ul {
        color : white;
    }
`;

const Intro = () => {
    return (
        <IntroBox>
            <div>
            </div>
            <ul>
                <li>아무거나 다 잘한다</li>
                <li>아무거나 다 잘한다</li>
                <li>아무거나 다 잘한다</li>
                <li>아무거나 다 잘한다</li>
            </ul>
        </IntroBox>
    );
};

export default Intro;