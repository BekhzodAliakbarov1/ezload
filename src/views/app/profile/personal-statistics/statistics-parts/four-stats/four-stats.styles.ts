import styled from 'styled-components';
import { colors } from 'styles/variables';

export const FourStyledContainer = styled.div`
  width: fit-content;
  margin-top: 64px;
  margin-bottom: 50px;
  > p {
    margin-bottom: 48px;
  }
`;

export const MoneyStatsWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: flex-start;
`;

export const MoneyStatsRow = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  > h3 {
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    color: ${colors.green_100};
  }
  > p {
    color: ${(props) => props.theme.text.main_50};
  }
  @media (max-width: 800px) {
    > h3 {
      font-size: 28px;
    }
  }
`;
