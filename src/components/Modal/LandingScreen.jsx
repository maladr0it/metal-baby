import React, { useContext } from "react";
import styled from "styled-components";

import { gameStarted } from "../../actions";
import GameStateContext from "../GameStateContext";

const LandingScreen = () => {
  const { dispatch } = useContext(GameStateContext);
  return (
    <div>
      <h1>WELCOME_TO_GAME!</h1>
      <button onClick={() => dispatch(gameStarted())}>START!</button>
    </div>
  );
};

export default LandingScreen;
