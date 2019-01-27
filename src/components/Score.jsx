import React, { useContext } from 'react';
import styled from 'styled-components';

import { ticksPerYear } from '../gameConfig';
import GameStateContext from './GameStateContext';

const Container = styled.div`
  flex: 1 1 0;

  height: 2rem;

  color: ${({ theme }) => theme.tertiary};

  font-size: 1.3rem;
  line-height: 1.3rem;
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
      <p>SCORE: {age}</p>
    </Container>
  );
};

export default Score;
