import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: orange;

  flex: 1;
  border: 1px solid black;
  padding: 0.2rem;
  /* opacity: ${props => (props.past ? 0.5 : 1)}; */
  visibility: ${props => (props.type === "NULL" ? "hidden" : "visible")};
`;

const Content = styled.div`
  background-color: pink;
`;

const TaskBlock = ({ type }) => (
  <Container type={type}>
    <Content>{type}</Content>
  </Container>
);

export default TaskBlock;
