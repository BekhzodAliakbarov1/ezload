import styled from 'styled-components';
import { colors } from 'styles/variables';

export const DriverInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 80px;
  margin-top: 41px;
  background-color: ${colors.white};
  padding: 48px 38px 100px 48px;
  > p {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 48px;
  }
`;

export const DriverInfoBox = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  align-items: flex-start;
`;
