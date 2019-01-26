import React from "react";
import styled from "styled-components";

import Score from "./components/Score";
import HouseMap from "./components/HouseMap";
import Hud from "./components/Hud";

const Container = styled.div`
  height: 100%;
  background-color: pink;
  display: flex;
  flex-direction: column;
`;

const App = () => (
  <Container>
    <Score />
    <HouseMap />
    <Hud />
  </Container>
);

export default App;
