import React from "react";
import styled from "styled-components";

import Score from "./Score";
import HouseMap from "./HouseMap";
import Hud from "./Hud";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.tertiary}, ${theme.primary})`};
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
