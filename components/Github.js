import React, {useEffect, useRef} from "react";
import styled from "styled-components";

const GithubBox = styled.div`
    color : white;
    width : 100%;
    height : 90vh;
    & img {
        width : 600px;
        height : 400px;
    }

    & button {
      width : 300px;
      height : 40px;
      border : none;
      border-radius : 8px;
    }
    & button:hover {
      background : skyblue;
      color : white;
    }
`;

const Github = ({github}) => {
  const githubRef = useRef();
  useEffect(() => {
    github.setGithubRefs(githubRef);
  }, [githubRef]);
  return (
    <GithubBox id ="github" ref={githubRef}>
      <div>Contact</div>
      <img src="/github.png"/>
      <div>
        최대한 1일 1 커밋을 지킬려고 노력하는 개발자!<br/>
        어제 보다 오늘이 더 나은 개발자
        연락을 원한다면!
      </div>
      <div><button>CONTACT ME!</button></div>
    </GithubBox>
  );
};

export default Github;
