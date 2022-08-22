import styled from 'styled-components';

export const ThirdStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  gap: 88px;
  padding-bottom: 64px;
  border-bottom: 2px solid ${(props) => props.theme.text.main_5};
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  gap: 32px;
`;

export const ThreeCrdsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 94px;
  @media (max-width: 800px) {
    gap: 20px;
    justify-content: space-between;
  }
`;

export const CardsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  > p:nth-child(1) {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.25px;
    color: ${(props) => props.theme.text.main_50};
  }
  > p:nth-child(2) {
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
  }
  @media (max-width: 800px) {
    > p:nth-child(2) {
      font-size: 28px;
    }
  }
`;
