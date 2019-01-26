import React from 'react';
import styled from 'styled-components';

import StatusBars from './StatusBars';
import TaskTrack from './TaskTrack';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 1rem 1rem;
  border-radius: 0.3rem;

  background-color: ${({ theme }) => theme.background};
`;

const Hud = () => (
  <Container>
    <StatusBars />
    <TaskTrack />
  </Container>
);

export default Hud;
