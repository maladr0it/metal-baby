import React, { useContext } from 'react';
import styled from 'styled-components';

import MapImage from '../assets/test_map5.png';
import Button from './Button';

import { EAT, BATHE, PLAY } from '../constants/taskTypes';
import { taskAdded } from '../actions';
import GameStateContext from './GameStateContext';

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
  const { state } = useContext(GameStateContext);
  const { playing, gameOver } = state;
  const { dispatch } = useContext(GameStateContext);

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
      <StyledImg src={MapImage} />
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
