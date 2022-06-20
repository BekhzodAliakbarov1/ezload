import styled from 'styled-components';
import { colors } from 'styles/variables';

export const LoadInfoViewWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  background-color: ${colors.white};
  padding: 48px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const LoadInfowViewHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const LoadInfoDataWrapperBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;
