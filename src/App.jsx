import React from "react";
import { ThemeProvider } from "styled-components";

import { GameStateProvider } from "./components/GameStateContext";
import theme from "./theme";
import Game from "./components/Game";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GameStateProvider>
        <Game />
      </GameStateProvider>
    </ThemeProvider>
  );
};

export default App;
