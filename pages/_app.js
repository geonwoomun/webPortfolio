import React, {useState} from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Portfolio = ({ Component }) => {
  const [aboutRefs, setAboutRefs] = useState('');
  const [skillRefs, setSkillRefs] = useState('');
  const [projectRefs, setProjectRefs] = useState('');
  const [contactRefs, setContactRefs] = useState('');
  return (
    <div>
      <style jsx global>{`
        body {
          font-family: 'Bitter', cursive;
        }
      `}</style>
      <Head>
        <title>mgw`s webPortfolio</title>
        <meta name="viewport"
        content="width=device-width, initial-scale=1"/> 
        <link
          href="https://fonts.googleapis.com/css?family=Bitter|Noto+Sans+KR&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <AppLayout refs={{aboutRefs, skillRefs, projectRefs, contactRefs}}>
        <Component skill={{skillRefs, setSkillRefs}} about={{aboutRefs, setAboutRefs}} project={{projectRefs, setProjectRefs}} contact={{contactRefs, setContactRefs}} />
      </AppLayout>
    </div>
  );
};

export default Portfolio;
