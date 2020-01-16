import React from "react";
import styled from "styled-components";

const IntroBox = styled.div`
  display: flex;
  flex-direction : column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height : 110vh;
  color : white;
  & .aboutBox {
    display : flex;
  }
  & .pic {
    width: 200px;
    height: 200px;
    border: 1px solid white;
    border-radius: 50%;
  }
  & ul {
    color: white;
    list-style : none;
  }
`;

const Intro = () => {
  return (
    <IntroBox>
      <div>
        About Me
      </div>
      <div className = "aboutBox">
        <div className="pic"></div>
        <ul>
          <li></li>
          <li>아무거나 다 잘한다</li>
          <li>아무거나 다 잘한다</li>
          <li>아무거나 다 잘한다</li>
        </ul>
      </div>
    </IntroBox>
  );
};

export default Intro;
