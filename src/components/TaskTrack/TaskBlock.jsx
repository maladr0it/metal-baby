import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  border: 1px solid black;
  padding: 0.2rem;
  visibility: ${props => (props.type === "NULL" ? "hidden" : "visible")};
`;

const Content = styled.div``;

const TaskBlock = ({ type }) => (
  <Container type={type}>
    <Content>{type}</Content>
  </Container>
);

export default TaskBlock;
