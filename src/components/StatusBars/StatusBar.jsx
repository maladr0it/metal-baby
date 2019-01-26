import React from 'react';
import styled, { keyframes } from 'styled-components';

const StatusBar = ({ icon }) => (
  <Container>
    <IconContainer>
      <i className={icon} />
    </IconContainer>
    <ProgressBar />
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
    `linear-gradient(-45deg, ${theme.primary},  ${theme.secondary})`};
  color: ${({ theme }) => theme.background};
  font-size: 0.8rem;
`;

// const fill = keyframes`

// `;

const ProgressBar = styled.div`
  flex: 1;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.highlight};
  border-radius: 0.2rem;
  margin-left: 0.1rem;
`;

export default StatusBar;
