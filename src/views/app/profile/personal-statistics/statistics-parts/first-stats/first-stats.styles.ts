import styled from 'styled-components';

export const FirstStatsWrapper = styled.div`
  width: 370px;
  padding-bottom: 10px;

  > p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
