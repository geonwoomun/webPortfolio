import React from "react";
import styled from 'styled-components';

const skill = {
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
const SkillTitle = styled.div`
  color : white;
`;
const SkillBox = styled.div`
    display : flex;
    color : white;
    text-align : center;
    & img {
        width : 150px;
        height : 150px;
        border-radius : 50%;
        margin : auto;
        object-fit : cover;
        border : 2px solid #2c3e50;
        padding : 8px;
    }
`;

const MySkills = () => {
  return (
    <div style={{height : "90vh", width : "100%"}}>
      <SkillTitle>
        My Skills
      </SkillTitle>
      <SkillBox>
        <span>language</span>
        {skill.language.map(v => {
          return (
            <div key ={v.name}>
              <img src={`/static/${v.imgPath}`} />
              <div>{v.name}</div>
            </div>
          );
        })}
      </SkillBox>
      <SkillBox>
        <span>library</span>
        {skill.library.map(v => {
          return (
            <div key ={v.name}>
              <img src={`/static/${v.imgPath}`} />
              <div>{v.name}</div>
            </div>
          );
        })}
      </SkillBox>
      <SkillBox>
        <span>etc</span>
        {skill.etc.map(v => {
          return (
            <div key ={v.name}>
              <img src={`/static/${v.imgPath}`} />
              <div>{v.name}</div>
            </div>
          );
        })}
      </SkillBox>
    </div>
  );
};

export default MySkills;
