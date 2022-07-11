import styled from 'styled-components';

export const LoadBidsWrapper = styled.div`
  width: 100%;
  > p {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 48px;
  }
  > button {
    max-width: 296px;
  }
`;

export const LoadBidsDataBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 72px;
`;

export const LoadBidDriverCostWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  margin-left: 16px;
  align-items: center;
  > p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
  }
`;

export const LoadBidDriverCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
