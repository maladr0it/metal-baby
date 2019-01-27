import React, { useContext } from "react";
import styled from "styled-components";

import { gameStarted } from "../../actions";
import { getAge, getZeroNeed } from "../../selectors";
import GameStateContext from "../GameStateContext";
import Button from "../Button";

const gameOverMessageMap = {
  hunger: `😱Your baby died of hunger.`,
  hygiene: `💩Your baby died from poor hygiene.`,
  fun: `😔Your baby died of boredom...`
};

const Container = styled.div`
  padding: 1rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.background};

  color: ${({ theme }) => theme.tertiary};
  text-align: center;

  ${Button} {
    margin-top: 1rem;
    box-shadow: none;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const GameOverScreen = () => {
  const { state, dispatch } = useContext(GameStateContext);
  const age = getAge(state);
  const gameOverType = getZeroNeed(state);
  const message = gameOverMessageMap[gameOverType];

  return (
    <Container>
      <Title>Game Over</Title>
      <p>{message}</p>
      <br />
      <p>Your baby lived to be {age} years old.</p>
      <Button onClick={() => dispatch(gameStarted())}>RESTART</Button>
    </Container>
  );
};

export default GameOverScreen;
