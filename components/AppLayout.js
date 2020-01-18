import React, {useEffect} from "react";
import styled from "styled-components";

const MenuBar = styled.div`
  position : fixed;
  background : black;
  z-index : 2;
  top : 0;
  width: 100%;
  height: 10vh;
  border-bottom : 1px solid white;
  display : flex;
  justify-content : space-between;
  align-items : center;
  & a {
    cursor: pointer;
  }
  & a:hover{
    color : skyblue;
  }
  & div {
      color : white;
      margin : 0 20px;
  }
  & .buttonBox {
      display : flex;
      margin-left : auto;
      & a {
          color : white;
          text-decoration : none;
          text-transform : uppercase;
          margin: 10px;
      }
      & a:hover{
          color : skyblue;
      }
  }
`;

const AppLayout = ({ children, refs }) => {
  const onNaviClick = (type) => (e) => {
    const vh = document.documentElement.clientHeight / 100;
    let n;
    if(type =="home"){
      n = 0;
    }else if(type === "about"){
      n = refs.aboutRefs.current.offsetTop;
    }else if(type === "skill"){
      n = refs.skillRefs.current.offsetTop;
    }else if(type === "project"){
      n = refs.projectRefs.current.offsetTop;
    }else if(type === "contact"){
      n = refs.contactRefs.current.offsetTop;
    }
    window.scroll({
      top : n - 10*vh,
      // top : n * (height - 8 * vh),
      behavior : 'smooth'
    })
  };
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background : #f1f2f6;
        }
      `}</style>
      <MenuBar>
          <div>
            <a onClick={onNaviClick("home")}>Mun`s Web Portfolio</a>
          </div>
          <div className="buttonBox">
            <a onClick={onNaviClick("about")}>about</a>
            <a onClick={onNaviClick("skill")}>skill</a>
            <a onClick={onNaviClick("project")}>project</a>
            <a onClick={onNaviClick("contact")}>contact</a>
          </div>
      </MenuBar>
      {children}
    </>
  );
};

export default AppLayout;