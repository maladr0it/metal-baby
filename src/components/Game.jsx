import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";

import { tickPeriod } from "../gameConfig";
import { gameTicked } from "../actions";

import GameStateContext from "./GameStateContext";
import Score from "./Score";
import HouseMap from "./HouseMap";
import Hud from "./Hud";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.tertiary}, ${theme.primary})`};
  max-width: 70vh;
  margin: 0 auto;
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
      <Score />
      <HouseMap />
      <Hud />
    </Container>
  );
};

export default Game;
