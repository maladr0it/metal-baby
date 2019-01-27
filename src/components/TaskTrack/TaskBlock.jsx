import React from 'react';
import styled from 'styled-components';

import { IDLE } from '../../constants/taskTypes';

const Container = styled.div`
  flex: 1;
  border-radius: 0.3rem;
  margin: 0 0.1rem;

  background-color: ${({ theme }) => theme.primary};
  visibility: ${props => (props.type === IDLE ? 'hidden' : 'visible')};
  text-align: center;
  height: 100%

  &:not(:first-child) {
    padding-left: 0.2rem;
  }
`;

const TaskBlock = ({ type }) => (
  <Container type={type}>
    <div>{type}</div>
  </Container>
);

export default TaskBlock;
