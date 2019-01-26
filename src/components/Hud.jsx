import React from "react";
import styled from "styled-components";

import StatusBars from "./StatusBars";
import TaskTrack from "./TaskTrack";

const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  background-color: orange;
`;

const Hud = () => (
  <Container>
    <StatusBars />
    <TaskTrack />
  </Container>
);

export default Hud;
