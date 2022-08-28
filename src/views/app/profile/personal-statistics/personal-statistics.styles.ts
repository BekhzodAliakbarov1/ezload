import styled from 'styled-components';

export const PersonalStatisticsWrapper = styled.div`
  padding-left: 96px;
  width: 100%;
  > p {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 40px;
  }
  @media (max-width: 800px) {
    padding: 24px;
    > p {
      font-size: 20px;
      margin-bottom: 30px;
    }
  }
`;
