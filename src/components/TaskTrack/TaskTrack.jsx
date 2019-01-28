import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import { IDLE } from "../../constants/taskTypes";
import GameStateContext from "../GameStateContext";
import TaskBlock from "./TaskBlock";

const trackLength = 6;
const ticksBefore = 1;

const Container = styled.div`
  position: relative;
  flex: 2;
  margin: 1rem 0;
  overflow: hidden;
  border-radius: 0.3rem;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const slide = keyframes`
  to {
    transform: translateX(-${100 / trackLength}%);
  }
`;

const TaskBlockContainer = styled.div`
  position: relative;
  display: flex;
  width: ${(trackLength / (trackLength - 1)) * 100}%;
  height: 100%;
  background-color: ${({ theme }) => theme.disabled};
  animation: ${slide} ${props => props.speed}s linear;
  animation-fill-mode: forwards;
`;

const Clip = styled.div`
  position: absolute;
  margin-left: -0.3rem;
  width: ${(100 * ticksBefore) / (trackLength - 1)}%;
  top: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  opacity: 0.8;
  border-right: ${({ theme }) => ` 0.2rem solid ${theme.highlight}`};
`;

const TaskTrack = () => {
  const { state } = useContext(GameStateContext);
  const { tasks, time, speed } = state;
  // get only the tasks within the acceptable range
  const getVisibleTasks = () =>
    Array.from({ length: trackLength }).map((_, i) =>
      tasks[i + time - ticksBefore] !== undefined
        ? tasks[i + time - ticksBefore]
        : IDLE
    );

  return (
    <Container>
      <TaskBlockContainer key={time} speed={speed}>
        {getVisibleTasks().map((task, i) => (
          <TaskBlock key={time + i} type={task} />
        ))}
      </TaskBlockContainer>
      <Clip />
    </Container>
  );
};

export default TaskTrack;
