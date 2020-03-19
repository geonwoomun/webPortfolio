import React from "react";
import Document, { Main, NextScript, Head } from "next/document";
import Helmet from "react-helmet";
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
        html {
            width: 100%;
        }
         body {
            width: 100%;
            height: 100%;
            overflow-x: hidden;
            font-family: "Noto Sans KR", sans-serif;
            margin: 0;
            padding: 0;
            background : #f1f2f6;
          }
`;

class MyDocument extends Document {
  static getInitialProps(context) {
    const sheet = new ServerStyleSheet();
    const page = context.renderPage(App => props =>
      sheet.collectStyles(
        <>
          <GlobalStyles />
            <App {...props} />
        </>
      )
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, helmet: Helmet.renderStatic(), styleTags };
  }
  render() {
    const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet;
    const htmlAttrs = htmlAttributes.toComponent();
    const bodyAttrs = bodyAttributes.toComponent();
    return (
      <html {...htmlAttrs}>
        <Head>
          <link
            href='https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap&subset=korean'
            rel='stylesheet'
          />
          <meta name="viewport" content="width=device-width, initial-scale=1"/> 
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {this.props.styleTags}
          {Object.values(helmet).map(el => el.toComponent())}
        </Head>
        <body {...bodyAttrs}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
