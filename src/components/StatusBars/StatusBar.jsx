import React, { useContext, useRef } from 'react';
import styled, { css } from 'styled-components';

import {
  tickPeriod,
  initialNeeds,
  maxNeeds,
  needsDecay
} from '../../gameConfig';
import GameStateContext from '../GameStateContext';

const StatusBar = ({ type, icon }) => {
  const { state } = useContext(GameStateContext);
  const lastValue = useRef(initialNeeds[type]);

  const value = state.needs[type];
  const decay = needsDecay[type];
  const max = maxNeeds[type];

  let growth = null;
  if (value < lastValue.current - decay) {
    growth = 'DECREASING';
  } else if (value > lastValue.current) {
    growth = 'INCREASING';
  }

  // store the value in the a ref for next time
  lastValue.current = value;

  return (
    <Container>
      <IconContainer value={value} max={max} growth={growth}>
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

const growthStyle = ({ growth, theme }) => {
  if (growth === 'INCREASING') {
    return css`
      background: ${theme.highlight} none;
      transition: width ${tickPeriod / 6}s linear;
    `;
  } else if (growth === 'DECREASING') {
    return css`
      background: ${theme.warning} none;
      transition: width ${tickPeriod / 6}s linear;
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

  ${growthStyle}
  transition: 0.3s;

  ${dangerStyle}
`;

const ProgressBarTrack = styled.div`
  position: relative;

  flex: 1;
  height: 1rem;
  margin-left: 0.1rem;
  border-radius: 0.3rem;

  background-color: #ecf8ee;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const ActiveProgressBar = styled.span`
  position: absolute;
  width: ${props => (props.value / props.max) * 100}%;
  height: 100%;
  border-radius: 0.3rem;
  margin-left: 0.1rem;
  transition: width ${tickPeriod}s linear;
  background-color: ${({ theme }) => theme.primary};
  ${growthStyle};
  transition: 0.3s;
  ${dangerStyle}
`;

export default StatusBar;
