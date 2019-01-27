import React, { useContext } from "react";
import styled from "styled-components";

import GameStateContext from "../GameStateContext";
import LandingScreen from "./LandingScreen";
import GameOverScreen from "./GameOverScreen";

const Dimmer = styled.div`
  position: absolute;
  z-index: 200;

  width: 100%;
  max-width: 70vh;
  height: 100%;

  background-color: black;
  opacity: 0.5;
`;

const Container = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%) translateY(-60%);
  z-index: 300;
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
