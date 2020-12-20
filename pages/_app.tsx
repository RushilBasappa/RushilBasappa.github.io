import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import "./styles.css"

const GlobalStyle = createGlobalStyle`
  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div,
  div#__next > div > div {
    height: 100%;
    margin: 0;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charSet="utf-8" />
          <title>Rushil Basappa</title>

        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
export default MyApp;
