import React, { useContext } from "react";
import styled from "styled-components";

import { taskAdded } from "../actions";
import { EAT, BATHE, PLAY, IDLE } from "../constants/taskTypes";
import GameStateContext from "./GameStateContext";

import EatImage from "../assets/test_map3.png";
import BatheImage from "../assets/test_map4.png";
import PlayImage from "../assets/test_map5.png";
import IdleImage from "../assets/test_map6.png";

import Button from "./Button";

const taskImageMap = {
  [EAT]: EatImage,
  [BATHE]: BatheImage,
  [PLAY]: PlayImage,
  [IDLE]: IdleImage
};

const Container = styled.div`
  position: relative;

  ${Button}.eat {
    position: absolute;
    top: 30%;
    left: 25%;
  }
  ${Button}.play {
    position: absolute;
    top: 65%;
    left: 25%;
  }
  ${Button}.bathe {
    position: absolute;
    top: 45%;
    left: 60%;
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;

const HouseMap = () => {
  const { state, dispatch } = useContext(GameStateContext);
  const { playing } = state;
  const currentTask = state.tasks[state.time];
  const taskImage = taskImageMap[currentTask];

  const eat = () => {
    dispatch(taskAdded(EAT));
  };
  const bathe = () => {
    dispatch(taskAdded(BATHE));
  };
  const play = () => {
    dispatch(taskAdded(PLAY));
  };

  return (
    <Container>
      <StyledImg src={taskImage} />
      {playing && (
        <>
          <Button className="eat" onClick={eat}>
            EAT
          </Button>
          <Button className="play" onClick={play}>
            WATCH TV
          </Button>
          <Button className="bathe" onClick={bathe}>
            BATHE
          </Button>
        </>
      )}
    </Container>
  );
};

export default HouseMap;
