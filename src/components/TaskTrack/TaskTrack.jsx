import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import { tickPeriod } from '../../gameConfig';
import { IDLE } from '../../constants/taskTypes';
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
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  flex: 5 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* visually center task track in HUD */
  margin-top: -0.4rem;
`;

const slide = keyframes`
  to {
    transform: translateX(-${100 / trackLength}%);
  }
`;

const Track = styled.div`
  overflow: hidden;
  border-radius: 0.3rem;
  height: 50%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const TaskBlockContainer = styled.div`
  position: relative;

  display: flex;
  width: ${(trackLength / (trackLength - 1)) * 100}%;
  height: 100%;

  background-color: ${({ theme }) => theme.disabled};

  animation: ${slide} ${tickPeriod}s linear;
  animation-fill-mode: forwards;
`;

const Clip = styled.div`
  position: absolute;
  margin-left: -0.3rem;
  width: ${(100 * ticksBefore) / (trackLength - 1)}%;
  height: 60%;
  background-color: ${({ theme }) => theme.background};
  opacity: 0.8;
  border-right: ${({ theme }) => ` 0.2rem solid ${theme.highlight}`};
`;
export default TaskTrack;
