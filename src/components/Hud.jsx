import React from "react";
import styled from "styled-components";

import StatusBars from "./StatusBars";
import TaskTrack from "./TaskTrack";
import Score from "./Score";

const Container = styled.div`
  z-index: 100;
  flex: 1;

  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-bottom: 0;
  padding: 1rem;
  border-radius: 0.3rem;

  background-color: ${({ theme }) => theme.background};
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

const Hud = () => (
  <Container>
    <Score />
    <TaskTrack />
    <StatusBars />
  </Container>
);

export default Hud;
