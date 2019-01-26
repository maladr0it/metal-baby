import React from 'react';
import styled from 'styled-components';

import MapImage from '../assets/test_map.png';

const Container = styled.div`
  width: 100vw;
  height: 100vw;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const HouseMap = () => (
  <Container>
    <StyledImg src={MapImage} />
  </Container>
);

export default HouseMap;
