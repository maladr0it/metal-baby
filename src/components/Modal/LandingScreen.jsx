import React, { useContext } from "react";
import styled from "styled-components";

import Button from "../Button";

import { gameStarted } from "../../actions";
import GameStateContext from "../GameStateContext";

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

const LandingScreen = () => {
  const { dispatch } = useContext(GameStateContext);
  return (
    <Container>
      <h1>{"😊Take good care of your baby robot!"}</h1>
      <Button onClick={() => dispatch(gameStarted())}>START!</Button>
    </Container>
  );
};

export default LandingScreen;
