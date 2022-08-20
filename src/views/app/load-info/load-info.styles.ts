import styled from 'styled-components';
import { colors } from 'styles/variables';

export const LoadInfoViewWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  background-color: ${(props) => props.theme.bg.secondary};
  padding: 48px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  @media (max-width: 800px) {
    padding: 24px;
  }
`;

export const LoadInfowViewHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-size: 24px;
    line-height: 29px;
    text-align: left;
  }
  @media (max-width: 800px) {
    button {
      width: fit-content !important;
    }
    > p {
      font-size: 20px;
    }
  }
`;

export const LoadInfoDataWrapperBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
