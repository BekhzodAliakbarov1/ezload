import styled from 'styled-components';
import { sizes } from 'styles/variables';

export const UserReviewWrapper = styled.div<{ size?: 'small' | 'large' }>`
  max-width: ${({ size }) =>
    size === 'small' ? '300px' : size === 'large' ? '569px' : 'auto'};
  width: 100%;
  @media (max-width: ${sizes.breakpoints.lg}) {
    max-width: 569px;
  }
`;
