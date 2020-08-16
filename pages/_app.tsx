import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Head from 'next/head';

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
          <title>Rushil Basappa</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
export default MyApp;
