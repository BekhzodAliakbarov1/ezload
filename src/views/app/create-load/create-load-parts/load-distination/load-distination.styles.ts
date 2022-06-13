import styled from 'styled-components';
import { colors } from 'styles/variables';

export const DistinationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  margin-bottom: 56px;
  > p {
    letter-spacing: 0ch.15px;
    color: ${colors.dark_80};
  }
`;

export const DistanceSizeBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  > p {
    font-size: 24px;
    line-height: 24px;
  }
`;
