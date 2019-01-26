import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import GameStateContext from '../GameStateContext';
import TaskBlock from './TaskBlock';

const trackLength = 6;
const ticksBefore = 2;
const TaskTrack = () => {
  const { state } = useContext(GameStateContext);
  const { tasks, time } = state;

  // get only the tasks within the acceptable range
  const getVisibleTasks = () =>
    Array.from({ length: trackLength }).map((_, i) =>
      tasks[i + time - ticksBefore] !== undefined
        ? tasks[i + time - ticksBefore]
        : 'NULL'
    );

  return (
    <Container>
      <Track>
        <TaskBlockContainer key={time}>
          {getVisibleTasks().map((task, i) => (
            <TaskBlock key={i} type={task} />
          ))}
        </TaskBlockContainer>
      </Track>
      <VerticalRule />
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  flex: 1;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const slide = keyframes`
  to {
    transform: translateX(-${100 / trackLength}%);
  }
`;

const Track = styled.div`
  overflow: hidden;
  border-radius: 0.3rem;
`;

const TaskBlockContainer = styled.div`
  display: flex;
  width: ${(trackLength / (trackLength - 1)) * 100}%;
  background-color: ${({ theme }) => theme.disabled};

  animation: ${slide} 0.5s;
  animation-fill-mode: forwards;
`;

const VerticalRule = styled.div`
  position: absolute;
  left: ${(100 * ticksBefore) / (trackLength - 1)}%;
  transform: translateX(25%);
  height: 100%;
  width: 0.2rem;

  background-color: ${({ theme }) => theme.highlight};
`;

export default TaskTrack;
