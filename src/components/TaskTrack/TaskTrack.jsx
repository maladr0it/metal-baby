import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import { IDLE } from '../../constants/activityTypes';
import GameStateContext from '../GameStateContext';
import TaskBlock from './TaskBlock';

const trackLength = 6;
const ticksBefore = 1;
const TaskTrack = () => {
  const { state } = useContext(GameStateContext);
  const { tasks, time } = state;

  // get only the tasks within the acceptable range
  const getVisibleTasks = () =>
    Array.from({ length: trackLength }).map((_, i) =>
      tasks[i + time - ticksBefore] !== undefined
        ? tasks[i + time - ticksBefore]
        : IDLE
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
      <Clip />
      {/* <VerticalRule /> */}
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

const Clip = styled.div`
  position: absolute;
  margin-left: -0.3rem;
  width: ${(100 * ticksBefore) / (trackLength - 1)}%;
  height: 2rem;
  background-color: ${({ theme }) => theme.background};
  opacity: 0.8;
  border-right: ${({ theme }) => ` 0.2rem solid ${theme.highlight}`};
`;
export default TaskTrack;
