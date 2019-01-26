import React from "react";
import styled from "styled-components";

import StatusBar from "./StatusBar";

const BARS = [
  { label: "ENERGY", icon: "fas fa-battery-empty" },
  { label: "FUN", icon: "fas fa-smile-beam" },
  { label: "HYGIENE", icon: "fas fa-shower" }
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;

  & > div:not(:last-child) {
    margin-right: 1rem;
  }
`;

const bars = BARS.map(({ label, icon }, i) => (
  <StatusBar key={i} label={label} icon={icon} />
));

const StatusBars = () => <Container>{bars}</Container>;

export default StatusBars;
