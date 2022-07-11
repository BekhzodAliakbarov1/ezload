import styled from 'styled-components';
import { colors } from 'styles/variables';

export const LoadDateTimeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > p {
    margin-bottom: 24px;
  }
`;

export const DateSelectBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 17px;
  align-items: flex-start;
`;

export const DateFromToWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
