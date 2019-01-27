import React, { useContext, useRef } from "react";
import styled, { css } from "styled-components";

import {
  tickPeriod,
  initialNeeds,
  maxNeeds,
  needsDecay
} from "../../gameConfig";
import GameStateContext from "../GameStateContext";

const StatusBar = ({ type, icon }) => {
  const { state } = useContext(GameStateContext);
  const lastValue = useRef(initialNeeds[type]);

  const value = state.needs[type];
  const decay = needsDecay[type];
  const max = maxNeeds[type];

  let growth = null;
  if (value < lastValue.current - decay) {
    growth = "DECREASING";
  } else if (value > lastValue.current + decay) {
    growth = "INCREASING";
  }

  // store the value in the a ref for next time
  lastValue.current = value;

  return (
    <Container>
      <IconContainer>
        <i className={icon} />
      </IconContainer>
      <ProgressBarTrack>
        <ActiveProgressBar value={value} max={max} growth={growth} />
      </ProgressBarTrack>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;

  color: ${({ theme }) => theme.tertiary};
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;

  font-size: 0.8rem;

  background-image: ${({ theme }) =>
    `linear-gradient(-45deg, ${theme.primary}, ${theme.secondary})`};
  color: ${({ theme }) => theme.background};
`;

const ProgressBarTrack = styled.div`
  position: relative;

  flex: 1;
  height: 1rem;
  margin-left: 0.1rem;
  border-radius: 0.3rem;

  background-color: #ecf8ee;
`;

const growthStyle = ({ growth }) => {
  if (growth === "INCREASING") {
    return css`
      background-color: green;
    `;
  } else if (growth === "DECREASING") {
    return css`
      background-color: red;
    `;
  }
};

const ActiveProgressBar = styled.span`
  position: absolute;
  width: ${props => (props.value / props.max) * 100}%;
  height: 100%;
  border-radius: 0.3rem;
  margin-left: 0.1rem;
  transition: width ${tickPeriod}s linear;
  background-color: ${({ theme }) => theme.highlight};
  ${growthStyle};
`;

export default StatusBar;
