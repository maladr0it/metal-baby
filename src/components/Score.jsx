import React, { useContext } from "react";
import styled from "styled-components";

import { ticksPerYear } from "../gameConfig";
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
  const { state } = useContext(GameStateContext);
  const { time } = state;
  const age = Math.floor(time / ticksPerYear);

  return (
    <Container>
      <span>SCORE: {age}</span>
    </Container>
  );
};

export default Score;
