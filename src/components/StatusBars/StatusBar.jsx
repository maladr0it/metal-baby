import React, { useContext, useRef } from "react";
import styled, { css } from "styled-components";

import { initialNeeds, maxNeeds, needsDecay } from "../../gameConfig";
import GameStateContext from "../GameStateContext";

const Container = styled.div`
  display: flex;
  flex: 1;
  color: ${({ theme }) => theme.tertiary};
  align-items: center;
`;

const growthStyle = ({ growth, speed, theme }) => {
  if (growth === "INCREASING") {
    return css`
      background: ${theme.highlight} none;
      transition: width ${speed / 6}s linear;
    `;
  } else if (growth === "DECREASING") {
    return css`
      background: ${theme.warning} none;
      transition: width ${speed / 6}s linear;
    `;
  }
};

const dangerStyle = ({ value, max, theme }) => {
  const percentage = value / max;
  if (percentage <= 0.2) {
    return css`
      background: ${theme.danger} none;
    `;
  }
};

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  ${growthStyle};
  ${dangerStyle};
`;

const ProgressBarTrack = styled.div`
  position: relative;
  overflow: hidden;
  flex: 1;
  height: 1.2rem;
  border-radius: 0.6rem;
  margin-left: 0.2rem;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const ActiveProgressBar = styled.span.attrs(props => ({
  style: {
    width: `${(props.value / props.max) * 100}%`
  }
}))`
  position: absolute;
  height: 100%;
  transition: width ${props => props.speed}s linear;
  background-color: ${({ theme }) => theme.primary};
  ${growthStyle};
  ${dangerStyle};
`;

const StatusBar = ({ type, icon }) => {
  const { state } = useContext(GameStateContext);
  const lastValue = useRef(initialNeeds[type]);

  const { speed, gameNumber } = state;
  const value = state.needs[type];
  const decay = needsDecay[type];
  const max = maxNeeds[type];

  let growth = null;
  if (value < lastValue.current - decay) {
    growth = "DECREASING";
  } else if (value > lastValue.current) {
    growth = "INCREASING";
  }
  // store the value in the a ref for next time
  lastValue.current = value;

  return (
    <Container>
      <IconContainer value={value} max={max} growth={growth} speed={speed}>
        <i className={icon} />
      </IconContainer>
      <ProgressBarTrack>
        <ActiveProgressBar
          // re-mounts the bars when a new game starts, removing animation
          key={gameNumber}
          value={value}
          max={max}
          growth={growth}
          speed={speed}
        />
      </ProgressBarTrack>
    </Container>
  );
};

export default StatusBar;
