import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Portfolio = ({Component}) => {
    return (
        <div>
            <Head>
                <title>mgw`s webPortfolio</title>
            </Head>
            <AppLayout>
                <Component/>
            </AppLayout>
        </div>
    );
};

export default Portfolio;