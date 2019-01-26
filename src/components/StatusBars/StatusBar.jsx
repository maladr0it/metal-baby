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
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-image: ${({ theme }) =>
    `linear-gradient(-45deg, ${theme.primary},  ${theme.secondary})`};
  color: ${({ theme }) => theme.background};
`;

const fill = keyframes`

`;

const ProgressBar = styled.div`
  flex: 1;
  height: 0.3rem;
  background-color: ${({ theme }) => theme.highlight};
  border-radius: 0 0.2rem 0.2rem 0;
`;

export default StatusBar;
