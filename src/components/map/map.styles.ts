import styled from 'styled-components';

export const MapComponentWrapper = styled.div`
  width: 100%;
  max-height: 372px;
  height: 100%;
  position: relative !important;
  div {
    width: 0%;
    height: 100%;
  }
  svg {
    /* position: absolute; */
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
  }
`;
