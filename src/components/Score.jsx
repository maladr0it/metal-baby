import React from 'react';
import styled from 'styled-components';

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
  return (
    <Container>
      <span>SCORE: 100</span>
    </Container>
  );
};

export default Score;
