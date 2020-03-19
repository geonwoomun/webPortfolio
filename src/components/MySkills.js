import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const skills = {
  language: [
    {
      name: 'Javascript',
      imgPath: 'javascript.png'
    },
    {
      name: 'Typescript',
      imgPath: 'typescript.png'
    },
    {
      name: 'Python',
      imgPath: 'python.png'
    },
    {
      name: 'JAVA',
      imgPath: 'java.png'
    }
  ],
  web: [
    {
      name: 'HTML',
      imgPath: 'html.png'
    },
    {
      name: 'CSS',
      imgPath: 'css.png'
    },
    {
      name: 'React',
      imgPath: 'react.png'
    },
    {
      name: 'Express',
      imgPath: 'express.png'
    }
  ],
  etc: [
    {
      name: 'nodeJs',
      imgPath: 'nodejs.png'
    },
    {
      name: 'styled-components',
      imgPath: 'styled-components.png'
    },
    {
      name: 'oracle',
      imgPath: 'oracle.png'
    },
    {
      name: 'mysql',
      imgPath: 'mysql.png'
    },
    {
      name: 'mariaDB',
      imgPath: 'mariadb.png'
    }
  ]
};
const SkillWrapper = styled.div`
  /* height: 90vh; */
  width: 100%;
  background: white;
`;
const SkillTitle = styled.div`
  color: black;
  font-size: calc(25px + 1vw);
  font-weight : bold;
`;
const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  color: black;
  text-align: center;
  font-size: calc(10px + 1vw);
  & > span {
    margin: 20px 0;
    margin-right: auto;
  }
  & > div {
    display : flex;
    flex-wrap: wrap;
    & div {
      flex: 1;
    }
  }
  & img {
    width: 20vh;
    height: 20vh;
    border-radius: 20px;
    margin: auto;
    object-fit: cover;
    border: 2px solid #2c3e50;
    padding: 8px;
  }
`;

const MySkills = ({ skill }) => {
  const skillRef = useRef();
  useEffect(() => {
    skill.setSkillRefs(skillRef);
  }, [skillRef]);
  return (
    <SkillWrapper id='skill' ref={skillRef}>
      <SkillTitle>MY SKILLS</SkillTitle>
      <SkillBox>
        <span>LANGUAGE</span>
        <div>
          {skills.language.map(v => {
            return (
              <div key={v.name}>
                <img src={`/${v.imgPath}`} />
                <div>{v.name}</div>
              </div>
            );
          })}
        </div>
      </SkillBox>
      <SkillBox>
        <span>WEB</span>
        <div>
          {skills.web.map(v => {
            return (
              <div key={v.name}>
                <img src={`/${v.imgPath}`} />
                <div>{v.name}</div>
              </div>
            );
          })}
        </div>
      </SkillBox>
      <SkillBox>
        <span>ETC</span>
        <div>
          {skills.etc.map(v => {
            return (
              <div key={v.name}>
                <img src={`/${v.imgPath}`} />
                <div>{v.name}</div>
              </div>
            );
          })}
        </div>
      </SkillBox>
    </SkillWrapper>
  );
};

export default MySkills;
