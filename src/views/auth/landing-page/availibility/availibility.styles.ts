import styled from 'styled-components';
import { colors } from 'styles/variables';

export const AvailibilityWrapper = styled.div`
  width: 100%;
  margin-bottom: 80px;
  position: relative;
  margin-top: 340px;
  @media (max-width: 800px) {
    margin-top: 0px;
    width: 100%;
  }
`;

export const FeedStatisticsWrapper = styled.div`
  width: 100%;
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  margin-bottom: 100px;
  @media (max-width: 800px) {
    gap: initial;
    justify-content: space-between;
    margin-top: 56px;
    width: 100%;
    margin-bottom: 80px;
  }
`;

export const FeedStatisticsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p:nth-child(1) {
    font-size: 48px;
    line-height: 24px;
    color: ${colors.red_100};
    margin-bottom: 20px;
  }
  p:nth-child(2) {
    color: ${(props) => props.theme.text.main_80};
  }
  @media (max-width: 800px) {
    p:nth-child(1) {
      font-size: 28px;
    }
    p:nth-child(2) {
      font-size: 13px;
    }
  }
`;
