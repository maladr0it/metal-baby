import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";

import { EAT, BATHE, PLAY } from "../constants/activityTypes";
import { gameTicked, taskAdded, gameStarted } from "../actions";
import GameStateContext from "./GameStateContext";
import game from "../gameReducer";

const Container = styled.div`
  height: 1.5rem;
  margin: 0 1rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

const Debug = styled.span`
  font-size: 0.5rem;
  margin-right: 0.2rem;
`;

const Score = () => {
  const { state, dispatch } = useContext(GameStateContext);
  const { playing } = state;
  const intervalRef = useRef(null);

  const eat = () => {
    dispatch(taskAdded(EAT));
  };
  const bathe = () => {
    dispatch(taskAdded(BATHE));
  };
  const play = () => {
    dispatch(taskAdded(PLAY));
  };
  const tick = () => {
    dispatch(gameTicked());
  };
  const start = () => {
    dispatch(gameStarted());
  };

  useEffect(
    () => {
      if (playing) {
        intervalRef.current = setInterval(tick, 1000);
      } else {
        clearInterval(intervalRef.current);
      }
    },
    [playing]
  );

  return (
    <Container>
      <span>SCORE: 100</span>
      {/* <button onClick={tick}>TICK</button> */}
      <button onClick={eat}>EAT</button>
      <button onClick={bathe}>BATHE</button>
      <button onClick={play}>PLAY</button>
      <button onClick={start}>START</button>
    </Container>
  );
};

export default Score;
