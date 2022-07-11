import styled from 'styled-components';
import { colors } from 'styles/variables';

export const FeedWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const FeedDataWrapper = styled.div`
  width: 100%;
  max-width: 850px;
  height: 100%;
  max-height: 316px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 136px;
  > p:nth-child(1) {
    font-size: 36px;
    line-height: 56px;
    margin-bottom: 16px;
  }
  > p:nth-child(2) {
    font-size: 19px;
    line-height: 20px;
    margin-bottom: 48px;
  }
`;

export const FeedLocationWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
`;

export const FeedLocationCard = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bg.main};
  border: 1px solid ${colors.green_30};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  margin-bottom: 48px;
  > p {
    font-size: 11px;
    color: ${(props) => props.theme.text.main_60};
    margin-bottom: 8px;
  }
`;

export const LocationAndSvgWrapper = styled.div`
  display: flex;
  svg {
    margin-right: 4px;
  }
  p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_20};
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
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
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
`;

export const BackgrounImageWrapper = styled.img<{ position: 'left' | 'right' }>`
  position: absolute;
  left: ${(props) => props.position === 'left' && 0};
  right: ${(props) => props.position === 'right' && 0};
  top: ${(props) => (props.position === 'left' ? '27%' : '43%')};
`;
