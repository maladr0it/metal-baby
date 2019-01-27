import React, { useContext } from 'react';
import styled from 'styled-components';

import Button from '../Button';

import { gameStarted } from '../../actions';
import GameStateContext from '../GameStateContext';

const Container = styled.div`
  padding: 1rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.background};

  color: ${({ theme }) => theme.tertiary};
  text-align: center;

  ${Button} {
    margin-top: 1rem;
  }
`;

const GameOverScreen = () => {
  const { dispatch } = useContext(GameStateContext);
  return (
    <Container>
      <h1>GAME_OVER</h1>
      <p>You died of dysentry</p>
      <Button onClick={() => dispatch(gameStarted())}>RESTART</Button>
    </Container>
  );
};

export default GameOverScreen;
