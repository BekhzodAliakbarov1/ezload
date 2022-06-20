import styled from 'styled-components';
import { colors } from 'styles/variables';

export const LoadInfoCradWrapper = styled.div`
  width: fit-content;
  padding: 24px 32px;
  background-color: ${colors.green_5};
  width: 100%;
  > p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    margin-bottom: 16px;
  }
  > button {
    margin-bottom: 40px;
    height: 26px;
  }
`;

export const LoadInfoCardDataBox = styled.div`
  width: 100%;
  display: flex;
  gap: 80px;
  margin-bottom: 40px;
`;

export const LoadInfoCardDataSingleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  > p:nth-child(1) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.25px;
    color: ${colors.dark_50};
  }
  > p:nth-child(2) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${colors.dark_100};
  }
`;

export const LoadDescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 41px;
  text-align: left;
  > p:nth-child(1) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.25px;
    color: ${colors.dark_50};
  }
  > p:nth-child(2) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${colors.dark_100};
  }
`;

export const LoadBidAndViewCountWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 40px;
`;

export const LoadBidAndViewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  > p:nth-child(1) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.25px;
    color: ${colors.dark_50};
  }
  > p:nth-child(2) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${colors.dark_100};
  }
`;
