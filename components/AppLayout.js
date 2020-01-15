import React from "react";
import styled from "styled-components";

const MenuBar = styled.div`
  width: 100%;
  height: 100px;
  border-bottom : 1px solid white;
  display : flex;
  justify-content : space-between;
  align-items : center;
  & div {
      color : white;
      margin : 0 20px;
  }
  & .buttonBox {
      display : flex;
      justify-content : space-between;
      width : 300px;
      margin : 0 10px;
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

const AppLayout = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background : black;
        }
      `}</style>
      <MenuBar>
          <div>
            Mun`s Web Portfolio
          </div>
          <div className="buttonBox">
            <a href = "#">about</a>
            <a href="#">skill</a>
            <a href="#">project</a>
            <a href="#">github</a>
            <a href="#">contact</a>
          </div>
      </MenuBar>
      {children}
    </>
  );
};

export default AppLayout;
