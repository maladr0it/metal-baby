import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";

import HouseMap from "./HouseMap";
import Hud from "./Hud";
import Modal from "./Modal";

import { tickPeriod } from "../gameConfig";
import { gameTicked } from "../actions";
import GameStateContext from "./GameStateContext";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 70vh;
  margin: 0 auto;
`;

const Content = styled.div`
  max-height: 150vw;
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.tertiary}, ${theme.primary})`};
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Game = () => {
  const { state, dispatch } = useContext(GameStateContext);
  const intervalRef = useRef(null);
  const { playing } = state;

  const tick = () => {
    dispatch(gameTicked());
  };

  // If the game starts, begin the game loop
  useEffect(
    () => {
      if (playing) {
        intervalRef.current = setInterval(tick, tickPeriod * 1000);
      } else {
        clearInterval(intervalRef.current);
      }
      return () => clearInterval(intervalRef.current);
    },
    [playing]
  );

  return (
    <Container>
      <Content>
        <Hud />
        <HouseMap />
      </Content>
      <Modal />
    </Container>
  );
};

export default Game;
