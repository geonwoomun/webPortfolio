import React, {useEffect, useRef} from "react";
import styled from "styled-components";

const ContactBox = styled.div`
    color : black;
    width : 100%;
    height : 90vh;
    display : flex;
    flex-direction: column;
    align-items : center;
    & .contactTitle {
      font-size : calc(25px + 1vw);
      margin-right : auto;
    }
    & img {
        width : 50vw;
        height : 50vh;
        min-width : 450px;
        min-height : 300px;
    }

    & button {
      width : 300px;
      height : 40px;
      background : black;
      color : white;
      border : none;
      border-radius : 8px;
    }
    & button:hover {
      background : skyblue;
      color : white;
    }
`;

const Contact = ({contact}) => {
  const contactREf = useRef();
  useEffect(() => {
    contact.setContactRefs(contactREf);
  }, [contactREf]);
  return (
    <ContactBox id ="github" ref={contactREf}>
      <div className="contactTitle">Contact</div>
      <img src="/github.png"/>
      <div>
        열심히 노력하는 개발자!<br/>
        어제 보다 오늘이 더 나은 개발자!<br/>
        연락을 원한다면!
      </div>
      <div><button>CLICK ME!</button></div>
    </ContactBox>
  );
};

export default Contact;
