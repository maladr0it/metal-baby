import React from "react";
import styled from "styled-components";

import MapImage from "../assets/test_map5.png";
import Modal from "./Modal";
import Button from "./Button";

const StyledImg = styled.img`
  width: 100%;
`;

const HouseMap = () => (
  <Container>
    <Modal />
    <StyledImg src={MapImage} />
    <Button className="eat">EAT</Button>
    <Button className="tv">WATCH TV</Button>
    <Button className="shower">SHOWER</Button>
  </Container>
);

const Container = styled.div`
  position: relative;

  ${Button}.eat {
    position: absolute;
    top: 30%;
    left: 25%;
  }
  ${Button}.tv {
    position: absolute;
    top: 65%;
    left: 25%;
  }
  ${Button}.shower {
    position: absolute;
    top: 45%;
    left: 60%;
  }
`;

export default HouseMap;
