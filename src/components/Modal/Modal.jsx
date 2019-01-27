import React, { useContext } from "react";
import styled from "styled-components";

import GameStateContext from "../GameStateContext";
import LandingScreen from "./LandingScreen";
import GameOverScreen from "./GameOverScreen";

const Dimmer = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.5;
  z-index: 100;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: red;
`;

const Modal = () => {
  const { state } = useContext(GameStateContext);
  const { playing, gameOver } = state;
  return (
    <>
      {!playing && <Dimmer />}
      <Container>
        {gameOver && <GameOverScreen />}
        {!gameOver && !playing && <LandingScreen />}
      </Container>
    </>
  );
};

export default Modal;
