import React, {useState} from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Portfolio = ({ Component }) => {
  const [aboutRefs, setAboutRefs] = useState('');
  const [skillRefs, setSkillRefs] = useState('');
  const [projectRefs, setProjectRefs] = useState('');
  const [contactRefs, setContactRefs] = useState('');
  return (
    <>
      <Head>
        <title>mgw`s webPortfolio</title>
      </Head>
      <AppLayout refs={{aboutRefs, skillRefs, projectRefs, contactRefs}}>
        <Component skill={{skillRefs, setSkillRefs}} about={{aboutRefs, setAboutRefs}} project={{projectRefs, setProjectRefs}} contact={{contactRefs, setContactRefs}} />
      </AppLayout>
    </>
  );
};

export default Portfolio;
