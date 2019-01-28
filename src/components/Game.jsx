import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";

import HouseMap from "./HouseMap";
import Hud from "./Hud";
import Modal from "./Modal";

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
  const timeoutRef = useRef(null);
  const speedRef = useRef(null);
  const { playing, speed } = state;

  // TODO: find another way to achieve this
  // store speed in a ref so that it is visible from within tick()
  speedRef.current = speed;

  const tick = () => {
    dispatch(gameTicked());
    timeoutRef.current = setTimeout(tick, speedRef.current * 1000);
  };

  // If the game starts, begin the game loop
  useEffect(
    () => {
      if (playing) {
        tick();
      } else {
        clearInterval(timeoutRef.current);
      }
      return () => clearInterval(timeoutRef.current);
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
