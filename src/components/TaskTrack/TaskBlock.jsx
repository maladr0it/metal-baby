import React from "react";
import styled from "styled-components";

import { IDLE } from "../../constants/taskTypes";

const Container = styled.div`
  flex: 1;
  border: ${({ theme }) => `1px solid ${theme.primary}`};
  border-radius: 0.3rem;
  margin: 0 0.1rem;

  background-color: ${({ theme }) => theme.primary};
  visibility: ${props => (props.type === IDLE ? "hidden" : "visible")};
  text-align: center;

  &:not(:first-child) {
    padding-left: 0.2rem;
  }
`;
const Content = styled.div``;

const TaskBlock = ({ type }) => (
  <Container type={type}>
    <Content>{type}</Content>
  </Container>
);

export default TaskBlock;
