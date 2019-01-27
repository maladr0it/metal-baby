import React, { useContext } from "react";
import styled from "styled-components";

import { EAT, BATHE, PLAY, IDLE } from "../constants/taskTypes";
import GameStateContext from "./GameStateContext";

import EatImage from "../assets/test_map3.png";
import BatheImage from "../assets/test_map4.png";
import PlayImage from "../assets/test_map5.png";
import IdleImage from "../assets/test_map6.png";

import Modal from "./Modal";
import Button from "./Button";

const taskImageMap = {
  [EAT]: EatImage,
  [BATHE]: BatheImage,
  [PLAY]: PlayImage,
  [IDLE]: IdleImage
};

const StyledImg = styled.img`
  width: 100%;
`;

const HouseMap = () => {
  const { state } = useContext(GameStateContext);
  const currentTask = state.tasks[state.time];
  const taskImage = taskImageMap[currentTask];

  return (
    <Container>
      <Modal />
      <StyledImg src={taskImage} />
      <Button className="eat">EAT</Button>
      <Button className="tv">WATCH TV</Button>
      <Button className="shower">SHOWER</Button>
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  ${Button}.eat {
    position: absolute;
    top: 30%;
    left: 25%;
  }
  ${Button}.tv {
    position: absolute;
    top: 65%;
    left: 25%;
  }
  ${Button}.shower {
    position: absolute;
    top: 45%;
    left: 60%;
  }
`;

export default HouseMap;
