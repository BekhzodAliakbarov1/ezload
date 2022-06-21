import styled from 'styled-components';
import { colors } from 'styles/variables';

export const FirstStatsWrapper = styled.div`
  width: 370px;
  padding-bottom: 70px;
  svg {
    width: 100%;
    height: 100%;
  }
  > g {
    width: 100%;
    height: 100%;
  }
  /* canvas {
    width: 85% !important;
    height: 100% !important;
  } */
  > p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${colors.dark_70};
    margin-bottom: 32px;
  }
`;
