import React, { useContext } from "react";
import styled from "styled-components";

import { gameStarted } from "../../actions";
import GameStateContext from "../GameStateContext";

const GameOverScreen = () => {
  const { dispatch } = useContext(GameStateContext);
  return (
    <div>
      <h1>GAME_OVER</h1>
      <p>YOU DIED OF DYSENTRY</p>
      <button onClick={() => dispatch(gameStarted())}>RESTART</button>
    </div>
  );
};

export default GameOverScreen;
