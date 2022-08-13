import { TextField } from '@mui/material';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const LoadCreatorWrapper = styled.div`
  width: fit-content;
  gap: 24px;
  display: flex;
  align-items: center;
`;

export const LoadCardDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  > p:nth-child(1) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.25px;
  }
`;

export const LoadCardButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 33px;
  margin-top: 24px;
  margin-bottom: 100px;
  button {
    width: 296px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    button {
      width: 100%;
    }
  }
`;

export const LoadCancelModalWrapper = styled.form`
  width: fit-content;
  height: fit-content;
  padding: 56px 80px;
  background-color: ${colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  border-radius: 8px;
  .header {
    font-size: 24px;
    line-height: 24px;
    text-align: center;
  }
`;

export const ModalInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalStyledTextFiled = styled(TextField)`
  max-width: 506px;
  height: 118px;
  border: 1.5px solid ${(props) => props.theme.text.main_20};
  padding: 16px;
  > div {
    height: 100%;
    > textarea {
      height: 100% !important;
    }
  }
`;

export const ModalButtonsWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 16px;
  margin: auto;
`;

export const DeliveredModalWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.bg.secondary};
  padding: 56px 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  > p {
    width: 470px;
    text-align: center;
  }
  box-shadow: 0px 4px 24px rgba(20, 38, 73, 0.06);
  border-radius: 8px;
  @media (max-width: 800px) {
    > p {
      width: 300px;
    }
  }
`;

export const DeliveredModalButtonsWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 16px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
