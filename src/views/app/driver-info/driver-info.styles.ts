import styled from 'styled-components';

export const DriverInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 80px;
  margin-top: 41px;
  background-color: ${(props) => props.theme.bg.secondary};
  padding: 48px 38px 100px 48px;
  > p {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 48px;
  }
  @media (max-width: 800px) {
    padding: 28px 24px;
    margin-top: 20px;
    > p {
      margin-bottom: 24px;
    }
  }
`;

export const DriverInfoBox = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  /* align-items: flex-start; */
  height: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;
