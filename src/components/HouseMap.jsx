import React, { useContext } from "react";
import styled from "styled-components";

import { taskAdded } from "../actions";
import { getCurrentTask } from "../selectors";
import { EAT, BATHE, PLAY, IDLE } from "../constants/taskTypes";
import GameStateContext from "./GameStateContext";

import BlankPixel from "../assets/blank_pixel.png";

import EatImage from "../assets/robot-eating.png";
import BatheImage from "../assets/robot-bathing.png";
import PlayImage from "../assets/robot-playing.png";
import IdleImage from "../assets/robot-idle.png";

import Button from "./Button";

const taskImageMap = {
  [EAT]: EatImage,
  [BATHE]: BatheImage,
  [PLAY]: PlayImage,
  [IDLE]: IdleImage
};

const Container = styled.div`
  position: relative;
  ${Button} {
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
  }

  ${Button}.eat {
    top: 22%;
    left: 41%;
  }
  ${Button}.play {
    top: 82%;
    left: 30%;
  }
  ${Button}.bathe {
    top: 65%;
    left: 75%;
  }
`;
// A square image to make room for the image before it loads in
const ImageBoundsPusher = styled.img`
  width: 100%;
`;

const MapImageContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const ZImage = styled.img`
  width: 100%;
`;

const HouseMap = () => {
  const { state, dispatch } = useContext(GameStateContext);
  const { playing } = state;

  const currentTask = getCurrentTask(state);
  const TaskImage = taskImageMap[currentTask];

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
      <ImageBoundsPusher src={BlankPixel} />
      <MapImageContainer>
        <ZImage src={EatImage} hidden={currentTask !== EAT} />
        <ZImage src={BatheImage} hidden={currentTask !== BATHE} />
        <ZImage src={PlayImage} hidden={currentTask !== PLAY} />
        <ZImage src={IdleImage} hidden={currentTask !== IDLE} />

        {/* <img src={TaskImage} alt="game state" /> */}
      </MapImageContainer>
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
