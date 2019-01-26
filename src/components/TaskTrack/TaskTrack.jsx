import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import GameStateContext from "../GameStateContext";
import TaskBlock from "./TaskBlock";

const trackLength = 6;
const ticksBefore = 2;

const Container = styled.div`
  flex: 1;
  background-color: #6ed3ff;
  padding: 0.5rem;
`;

const slide = keyframes`
  to {
    transform: translateX(-${100 / trackLength}%);
  }
`;

const Track = styled.div`
  background-color: #fff185;
  overflow: hidden;
`;

const TaskBlockContainer = styled.div`
  width: ${(trackLength / (trackLength - 1)) * 100}%;
  background-color: red;
  display: flex;
  animation: ${slide} 0.5s;
  animation-fill-mode: forwards;
`;

const TaskTrack = () => {
  const { state, dispatch } = useContext(GameStateContext);
  const { tasks, time } = state;
  // const [time, setTime] = useState(ticksBefore);

  // get only the tasks within the acceptable range
  const getVisibleTasks = () =>
    Array.from({ length: trackLength }).map((_, i) =>
      tasks[i + time - ticksBefore] !== undefined
        ? tasks[i + time - ticksBefore]
        : "NULL"
    );

  // set state to have new time
  const advance = () => {
    dispatch({
      type: "TICK"
    });
  };

  return (
    <Container>
      <button onClick={advance}>ADVANCE</button>
      <Track>
        <TaskBlockContainer key={time}>
          {getVisibleTasks().map((task, i) => (
            <TaskBlock key={i} type={task} />
          ))}
        </TaskBlockContainer>
      </Track>
    </Container>
  );
};

export default TaskTrack;
