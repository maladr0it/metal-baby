import React, { useContext } from "react";
import styled from "styled-components";

import { gameTicked } from "../actions";
import GameStateContext from "./GameStateContext";

const Container = styled.div`
  height: 1.5rem;
  margin: 0 1rem;

  font-size: 1.5rem;
  line-height: 1.5rem;
`;

const Score = () => {
  const { dispatch } = useContext(GameStateContext);

  return (
    <Container>
      <span>SCORE: 100</span>
      <button onClick={() => dispatch(gameTicked())}>ONCLICK</button>
    </Container>
  );
};

export default Score;
