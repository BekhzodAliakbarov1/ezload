import styled from 'styled-components';

export const FirstStatsWrapper = styled.div`
  width: 370px;
  padding-bottom: 70px;

  > p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    margin-bottom: 32px;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
