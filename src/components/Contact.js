import React, { useEffect, useRef, useCallback } from "react";
import { Icon } from 'antd';
import styled from "styled-components";

const ContactBox = styled.div`
  color: black;
  background: white;
  margin-top: 30px;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .contactTitle {
    font-size: calc(25px + 1vw);
    font-weight: bold;
    margin-right: auto;
    margin-bottom : auto;
  }
  & .myGithub {
    width: 50vw;
    height: 50vh;
    min-width: 450px;
    min-height: 300px;
  }
  & .contactBox {
    display : flex;
    margin-bottom : auto;
    width : 100%;
    justify-content : space-around;
    align-items : center;
    font-size : calc(12px + 1vw);
  }
  & .gitIcon {
    font-size: 10vh;
  }
  & .velog {
    width: 10vh;
    height: 10vh;
    border-radius: 50%;
    margin : 0 20px;
  }
`;

const Contact = ({ contact }) => {
  const contactREf = useRef();
  useEffect(() => {
    contact.setContactRefs(contactREf);
  }, [contactREf]);
  const openWeb = useCallback(address => () => {
    window.open(address);
  }, []);
  return (
    <ContactBox id="github" ref={contactREf}>
      <div className="contactTitle">Contact</div>
      <div className="contactBox">
        <img className = "myGithub" src="/github.png" />
        <div>
          ansejrrhkd@gmail.com
          <br/>
          <Icon className ="gitIcon" type="github" onClick={openWeb('https://github.com/geonwoomun')} />
          <a onClick={openWeb('https://velog.io/@ansrjsdn')}>
            <img className="velog" src={'/velog.png'} alt="velog"></img>
          </a>
        </div>
      </div>
    </ContactBox>
  );
};

export default Contact;
