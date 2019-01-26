import React from 'react';
import styled from 'styled-components';

import MapImage from '../assets/test_map4.png';
import Button from './Button';

const StyledImg = styled.img`
  width: 100%;
`;

const HouseMap = () => (
  <Container>
    <StyledImg src={MapImage} />
    <Button>EAT</Button>
  </Container>
);

const Container = styled.div`
  position: relative;

  ${Button} {
    position: absolute;
    top: 30%;
    left: 30%;
  }
`;

export default HouseMap;
