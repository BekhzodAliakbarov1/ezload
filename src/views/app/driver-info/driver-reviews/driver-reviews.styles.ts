import styled from 'styled-components';

export const DriverReviewsWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bg.main};
  padding: 56px 64px;
  > p {
    margin-bottom: 56px;
    font-size: 24px;
    line-height: 24px;
    color: #092530;
  }
  @media (max-width: 800px) {
    padding: 32px 40px;
  }
`;

export const DriverReviewsDataBox = styled.div<{ isEmpty: boolean }>`
  width: 100%;
  height: 750px;
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
    height: fit-content;
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
    gap: 15px;
    svg {
      width: 100px;
      height: 100px;
    }
    > p {
      font-size: 18px;
    }
  }
`;
