import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;

  padding: 1rem;
`;

const Track = styled.div`
  height: 100%;
`;

const TaskTrack = () => (
  <Container>
    <Track />
  </Container>
);

export default TaskTrack;
