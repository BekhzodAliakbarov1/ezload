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
    color: ${colors.dark_60};
  }
  > p:nth-child(3) {
    color: ${colors.dark_80};
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
  border: 1.5px solid ${colors.dark_20};
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
