import styled from 'styled-components';
import { colors } from 'styles/variables';

export const LoadCreatorWrapper = styled.div`
  width: fit-content;
  gap: 24px;
  display: flex;
  align-items: center;
`;

export const LoadCardDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  > p:nth-child(1) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.25px;
    color: ${colors.dark_60};
  }
  > p:nth-child(3) {
    color: ${colors.dark_80};
  }
`;

export const LoadCardButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 33px;
  margin-top: 24px;
  margin-bottom: 100px;
  button {
    width: 296px;
  }
`;
