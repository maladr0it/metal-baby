import React from "react";
import styled from "styled-components";

import StatusBar from "./StatusBar";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: pink;
  padding: 0.5rem 1rem;

  & > div:not(:last-child) {
    margin-right: 1rem;
  }
`;

const StatusBars = () => (
  <Container>
    <StatusBar />
    <StatusBar />
    <StatusBar />
  </Container>
);

export default StatusBars;
