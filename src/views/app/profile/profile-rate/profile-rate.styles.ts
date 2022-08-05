import styled from 'styled-components';

export const ProfileRatesWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 48px;
  > p {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 48px;
  }
  .reviews {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
  }
  @media (max-width: 800px) {
    padding: 30px 24px;
  }
`;

export const ProfileRatesStarsWrapper = styled.div`
  width: 100%;
  padding-bottom: 64px;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 64px;
  > p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_70};
    margin-bottom: 38px;
  }
  @media (max-width: 800px) {
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
`;

export const OveralRatingDataWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  gap: 12px;
  align-items: center;
  > p {
    font-size: 24px;
    line-height: 24px;
    color: ${(props) => props.theme.text.main_70};
  }
  span {
    display: flex;
    gap: 12px;
  }
  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

export const DifferentRatingsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RatingsRaw = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  span {
    display: flex;
    gap: 12px;
  }
  > p {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_60};
  }
`;

export const ProfileRateReviewsDataBox = styled.div<{ isEmpty: boolean }>`
  width: 100%;
  height: ${(props) => (props.isEmpty ? '300px' : '750px')};
  margin-bottom: 104px;
  padding-top: 32px;
  overflow-x: scroll;
  gap: 48px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.isEmpty ? 'center' : 'flex-start')};
  align-items: ${(props) => (props.isEmpty ? 'center' : 'flex-start')};
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 800px) {
    margin-bottom: 0px;
  }
`;

export const EmptyReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  align-items: center;
  > p {
    font-size: 24px;
    line-height: 24px;
    color: ${(props) => props.theme.text.main_30};
  }
  @media (max-width: 800px) {
    svg {
      max-width: 100px;
      max-height: 130px;
    }
  }
`;
