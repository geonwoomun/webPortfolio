import React from "react";
import styled from "styled-components";
import { Icon } from 'antd';

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
      & a {
          color : white;
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
            <a href = "#"><Icon style ={{fontSize : "30px"}}type="idcard" theme="filled" /></a>
            <a href="#"><Icon style ={{fontSize : "30px"}} type="project" theme="filled" /></a>
            <a href="#"><Icon style ={{fontSize : "30px"}} type="github" theme="filled" /></a>
          </div>
      </MenuBar>
      {children}
    </>
  );
};

export default AppLayout;
