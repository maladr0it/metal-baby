import React from "react";
import styled from "styled-components";

import Score from "./Score";
import HouseMap from "./HouseMap";
import Hud from "./Hud";

const Container = styled.div`
  height: 100%;
  background-color: pink;
  display: flex;
  flex-direction: column;
`;

const Game = () => {
  return (
    <Container>
      <Score />
      <HouseMap />
      <Hud />
    </Container>
  );
};

export default Game;
