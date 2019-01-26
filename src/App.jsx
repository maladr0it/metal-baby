import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Score from './components/Score';
import HouseMap from './components/HouseMap';
import Hud from './components/Hud';

import theme from './theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  background-image: ${({ theme }) =>
    `linear-gradient(${theme.tertiary}, ${theme.primary})`};
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Score />
      <HouseMap />
      <Hud />
    </Container>
  </ThemeProvider>
);

export default App;
