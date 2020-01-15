import React from "react";
import styled from "styled-components";

const GithubBox = styled.div`
    color : white;
    & img {
        width : 600px;
        height : 400px;
    }
`;

const Github = () => {
  return (
    <GithubBox>
      <img src="/static/github.png"/>
      <div>
        최대한 1일 1 커밋을 지킬려고 노력
      </div>
    </GithubBox>
  );
};

export default Github;
