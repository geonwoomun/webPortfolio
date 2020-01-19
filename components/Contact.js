import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ContactBox = styled.div`
  color: black;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .contactTitle {
    font-size: calc(25px + 1vw);
    margin-right: auto;
    margin-bottom : auto;
  }
  & img {
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

  & button {
    margin-top: 10px;
    width: 80%;
    height: 6vh;
    background: black;
    color: white;
    border: none;
    border-radius: 8px;
  }
  & button:hover {
    background: skyblue;
    color: white;
  }
`;

const Contact = ({ contact }) => {
  const contactREf = useRef();
  useEffect(() => {
    contact.setContactRefs(contactREf);
  }, [contactREf]);
  return (
    <ContactBox id="github" ref={contactREf}>
      <div className="contactTitle">Contact</div>
      <div className="contactBox">
        <img src="/github.png" />
        <div>
          <div>
            열심히 노력하는 개발자!
            <br />
            어제 보다 오늘이 더 나은 개발자!
            <br />
            연락을 원한다면!
          </div>
          <button>CLICK ME!</button>
        </div>
      </div>
    </ContactBox>
  );
};

export default Contact;
