import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { primaryTextColor, backgroundColor } from '../src/theme';

const Title = styled.h1`
  margin-top: 0;
  font-size: 50px;
  color: ${primaryTextColor};
`;

const Wrapper = styled.div`
  height: 100%;
  background-color: ${backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Index = (): React.ReactElement => (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <Wrapper>
      <Title>Rushil Basappa 😎</Title>
    </Wrapper>
  </ThemeProvider>
);

export default Index;
