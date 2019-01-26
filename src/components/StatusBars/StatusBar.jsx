import React from "react";
import styled, { keyframes } from "styled-components";

const StatusBar = ({ icon, width }) => (
  <Container>
    <IconContainer>
      <i className={icon} />
    </IconContainer>

    <ProgressBarTrack>
      <ActiveProgressBar />
    </ProgressBarTrack>
  </Container>
);

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

  background-image: ${({ theme }) =>
    `linear-gradient(-45deg, ${theme.primary}, ${theme.secondary})`};
  color: ${({ theme }) => theme.background};
  font-size: 0.8rem;
`;

const ProgressBarTrack = styled.div`
  position: relative;

  flex: 1;
  height: 0.5rem;
  margin-left: 0.1rem;
  border-radius: 0.2rem;

  background-color: #ecf8ee;
`;

const ActiveProgressBar = styled.span`
  position: absolute;

  width: 50%;
  height: 0.5rem;
  border-radius: 0.2rem;
  margin-left: 0.1rem;
  transition: 3s;

  background-color: ${({ theme }) => theme.highlight};
`;

export default StatusBar;
