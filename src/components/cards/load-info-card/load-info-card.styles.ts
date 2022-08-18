import styled from 'styled-components';

export const LoadInfoCradWrapper = styled.div`
  width: fit-content;
  padding: 24px 32px;
  background-color: ${(props) => props.theme.bg.main};
  width: 100%;
  border-radius: 8px;
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
  @media (max-width: 800px) {
    button {
      max-width: fit-content !important;
    }
  }
`;

export const LoadInfoCardDataBox = styled.div`
  width: 100%;
  display: flex;
  gap: 80px;
  margin-bottom: 40px;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 32px;
  }
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
    color: ${(props) => props.theme.text.main_50};
  }
  > p:nth-child(2) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
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
    color: ${(props) => props.theme.text.main_50};
  }
  > p:nth-child(2) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
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
    color: ${(props) => props.theme.text.main_50};
  }
  > p:nth-child(2) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
  }
`;
