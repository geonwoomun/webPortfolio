import React , {useRef, useEffect} from "react";
import styled from "styled-components";

const IntroBox = styled.div`
  display: flex;
  flex-direction : column;
  width: 100%;
  height : 90vh;
  color : black;
  & .aboutTitle {
    margin-bottom: auto;
    font-size : calc(25px + 1vw);
  }
  & .aboutBox {
    margin : 0 auto;
    width : 100%;
    margin-bottom : auto;
    display : flex;
    justify-content: space-around;
    align-items : center;
  }
  & .pic {
    width: 40vh;
    height: 40vh;
    border: 1px solid black;
    border-radius: 50%;
    background : url('/mun.jpg') no-repeat;
    background-size : cover;
    background-position-y : -45px;
  }
  & ul {
    color: black;
    list-style : none;
    font-size: 4vw;
    letter-spacing : 1px;
  }
  & li {
    margin : 1vh 0;
  }
`;

const Intro = ({about}) => {
  const aboutRef = useRef();
  useEffect(() => {
    about.setAboutRefs(aboutRef);
  }, [aboutRef]);
  return (
    <IntroBox id ="about" ref={aboutRef}>
      <div className="aboutTitle">
        About Me
      </div>
      <div className = "aboutBox">
        <div className="pic"></div>
        <ul>
          <li>호기심 많은</li>
          <li>도전정신이 강한</li>
          <li>열심히 하는</li>
          <li>성실한 개발자</li>
          <li>자격증 : 정보처리기사, DASP, SQLD</li>
        </ul>
      </div>
    </IntroBox>
  );
};

export default Intro;
