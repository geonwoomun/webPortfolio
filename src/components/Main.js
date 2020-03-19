import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const MainBox = styled.div`
    position: relative;
    width : 100%;
    height : 100vh;
    background : grey;
    z-index : 1;
    display : flex;
    align-items : center;
    justify-content : center;
    color : white;
    font-size: 50px;

    & ::before {
        content : "";
        background : url('/background.jpg') no-repeat center;
        background-size : cover;
        position : absolute;
        filter:alpha(opacity=50);
        width: 100%;
        height: 100vh;
        opacity : 0.5 !important;
        z-index : -1;
    }
`;


const Main = () => {
    const divRef = useRef();
    const text = "개발자 문건우의 포트폴리오입니다.";
    let i = 0;
    const typing = () => {
        if ( i < text.length){
            divRef.current.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 100);
        }
    }
    useEffect(() => {
        typing();
    }, []);
    
    return (
        <MainBox ref = {divRef} id="main">
        </MainBox>
    );
};

export default Main;