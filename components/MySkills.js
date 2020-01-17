import React, {useEffect, useRef} from "react";
import styled from 'styled-components';

const skills = {
  language: [
    {
      name: "html",
      imgPath: "html.png"
    },
    {
      name: "css",
      imgPath: "css.png"
    },
    {
      name: "javascript",
      imgPath: "javascript.png"
    },
    {
      name: "python",
      imgPath: "python.png"
    },
    {
      name: "JAVA",
      imgPath: "java.png"
    }
  ],
  library: [
    {
      name: "react",
      imgPath: "react.png"
    },
    {
      name: "express",
      imgPath: "express.png"
    }
  ],
  etc: [
    {
      name: "nodeJs",
      imgPath: "nodejs.png"
    },
    {
      name: "styled-components",
      imgPath: "styled-components.png"
    },
    {
      name: "oracle",
      imgPath: "oracle.png"
    },
    {
      name: "mysql",
      imgPath: "mysql.png"
    },
    {
      name: "mariaDB",
      imgPath: "mariadb.png"
    }
  ]
};
const SkillWrapper = styled.div`
  height : 90vh;
  width : 100%;
`;
const SkillTitle = styled.div`
  color : white;
`;
const SkillBox = styled.div`
    display : flex;
    width : 80%;
    color : white;
    text-align : center;
    & > div {
      flex : 1;
    }
    & img {
        width : 18vh;
        height : 18vh;
        border-radius : 50%;
        margin : auto;
        object-fit : cover;
        border : 2px solid #2c3e50;
        padding : 8px;
    }
`;

const MySkills = ({skill}) => {
  const skillRef = useRef();
  useEffect(() => {
    skill.setSkillRefs(skillRef);
  }, [skillRef]);
  return (
    <SkillWrapper id="skill" ref={skillRef}>
      <SkillTitle>
        My Skills
      </SkillTitle>
      <SkillBox>
        <span>language</span>
        {skills.language.map(v => {
          return (
            <div key ={v.name}>
              <img src={`/${v.imgPath}`} />
              <div>{v.name}</div>
            </div>
          );
        })}
      </SkillBox>
      <SkillBox>
        <span>library</span>
        {skills.library.map(v => {
          return (
            <div key ={v.name}>
              <img src={`/${v.imgPath}`} />
              <div>{v.name}</div>
            </div>
          );
        })}
      </SkillBox>
      <SkillBox>
        <span>etc</span>
        {skills.etc.map(v => {
          return (
            <div key ={v.name}>
              <img src={`/${v.imgPath}`} />
              <div>{v.name}</div>
            </div>
          );
        })}
      </SkillBox>
    </SkillWrapper>
  );
};

export default MySkills;
