import React from "react";
import styled from "styled-components";

import { maxNeeds } from "../../gameConfig";
import StatusBar from "./StatusBar";

const BARS = [
  { label: "ENERGY", max: maxNeeds.hunger, icon: "fas fa-utensils" },
  { label: "FUN", max: maxNeeds.fun, icon: "fas fa-smile-beam" },
  { label: "HYGIENE", max: maxNeeds.hygiene, icon: "fas fa-shower" }
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

const StatusBars = () => {
  return <Container>{bars}</Container>;
};

export default StatusBars;
