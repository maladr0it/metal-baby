import React from "react";
import styled from "styled-components";

import { IDLE } from "../../constants/activityTypes";

const Container = styled.div`
  flex: 1;
  border: ${({ theme }) => `1px solid ${theme.primary}`};
  padding: 0.2rem;

  background-color: ${({ theme }) => theme.primary};
  visibility: ${props => (props.type === IDLE ? "hidden" : "visible")};
  text-align: center;
`;
const Content = styled.div``;

const TaskBlock = ({ type }) => (
  <Container type={type}>
    <Content>{type}</Content>
  </Container>
);

export default TaskBlock;
