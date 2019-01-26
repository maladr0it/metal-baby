import React, { useContext } from "react";
import styled from "styled-components";

import { EAT, BATHE, PLAY } from "../constants/activityTypes";
import { gameTicked, taskAdded } from "../actions";
import GameStateContext from "./GameStateContext";

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

  const eat = () => {
    dispatch(taskAdded(EAT));
  };

  const tick = () => {
    dispatch(gameTicked());
  };

  return (
    <Container>
      <span>SCORE: 100</span>
      <button onClick={tick}>TICK</button>
      {/* <Debug>HUN: {state.needs.hunger}</Debug> */}
      {/* <Debug>HYG: {state.needs.hygiene}</Debug> */}
      {/* <Debug>FUN: {state.needs.fun}</Debug> */}
      <button onClick={eat}>EAT</button>
    </Container>
  );
};

export default Score;
