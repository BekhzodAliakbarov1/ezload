import styled from 'styled-components';
import { colors } from 'styles/variables';

export const LoadInfoViewWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  background-color: ${colors.white};
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

export const MakeBidModalWrapper = styled.form`
  width: fit-content;
  height: fit-content;
  padding: 56px 80px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  border-radius: 8px;
  input {
    width: 352px;
  }
  .header {
    font-size: 24px;
    line-height: 24px;
    text-align: center;
  }
  .cost {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.25px;
    color: ${(props) => props.theme.text.main_60};
  }
`;

export const ModalButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
  button {
    width: 120px;
  }
`;
