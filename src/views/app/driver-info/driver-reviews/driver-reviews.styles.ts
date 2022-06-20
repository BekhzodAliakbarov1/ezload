import styled from 'styled-components';
import { colors } from 'styles/variables';

export const DriverReviewsWrapper = styled.div`
  width: 100%;
  background-color: ${colors.green_5};
  padding: 56px 64px;
  > p {
    margin-bottom: 56px;
    font-size: 24px;
    line-height: 24px;
    color: #092530;
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
`;

export const EmptyReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  align-items: center;
  > p {
    font-size: 24px;
    line-height: 24px;
    color: ${colors.dark_30};
  }
`;