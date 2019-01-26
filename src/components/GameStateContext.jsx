import React, { useReducer, createContext } from "react";

import gameReducer, { initialState } from "../gameReducer";

const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const value = { state, dispatch };
  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  );
};

export default GameStateContext;
