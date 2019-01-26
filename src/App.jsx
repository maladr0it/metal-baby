import React from "react";

import { GameStateProvider } from "./components/GameStateContext";
import Game from "./components/Game";

const App = () => {
  return (
    <GameStateProvider>
      <Game />
    </GameStateProvider>
  );
};

export default App;
