import React, { useContext } from "react";
import styled from "styled-components";

import { ticksPerYear } from "../gameConfig";
import { EAT, BATHE, PLAY } from "../constants/taskTypes";
import { taskAdded } from "../actions";
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
  const { time } = state;
  const age = Math.floor(time / ticksPerYear);

  const eat = () => {
    dispatch(taskAdded(EAT));
  };
  const bathe = () => {
    dispatch(taskAdded(BATHE));
  };
  const play = () => {
    dispatch(taskAdded(PLAY));
  };

  return (
    <Container>
      <span>Age: {age}</span>
      <button onClick={eat}>EAT</button>
      <button onClick={bathe}>BATHE</button>
      <button onClick={play}>PLAY</button>
    </Container>
  );
};

export default Score;
