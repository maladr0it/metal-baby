import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  background-color: blue;

  padding: 1rem;
`;

const Track = styled.div`
  height: 100%;
  background-color: maroon;
`;

const TaskTrack = () => (
  <Container>
    <Track />
  </Container>
);

export default TaskTrack;
