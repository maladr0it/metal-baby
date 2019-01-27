import React from "react";
import styled from "styled-components";

import StatusBar from "./StatusBar";

// TODO: change types to constants
const BARS = [
  {
    type: "hunger",
    icon: "fas fa-utensils"
  },
  {
    type: "fun",
    icon: "fas fa-smile-beam"
  },
  {
    type: "hygiene",
    icon: "fas fa-shower"
  }
];

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  & > div:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const bars = BARS.map((bar, i) => <StatusBar key={i} {...bar} />);

const StatusBars = () => {
  return <Container>{bars}</Container>;
};

export default StatusBars;
