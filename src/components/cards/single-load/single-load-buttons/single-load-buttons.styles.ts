import { TextField } from '@mui/material';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const LoadCardButtonWrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.text.main_60};
  padding: 8px 16px;
  border-radius: 2px;
  gap: 20px;
  p {
    font-size: 13px;
    line-height: 16px;
    color: ${colors.white};
    cursor: pointer;
  }
`;

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 644px;
  height: 228px;
  padding: 56px 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.bg.secondary};
  border: none;
  outline: none;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    margin-bottom: 48px;
  }
`;

export const ModalButtonsBox = styled.div`
  display: flex;
  gap: 24px;
  margin: auto;
  button:nth-child(1) {
    background-color: ${colors.red_100};
    :hover {
      background-color: ${colors.red_80};
    }
  }
  button:nth-child(2) {
    background-color: ${(props) => props.theme.bg.secondary};
    color: ${(props) => props.theme.text.main_70};
    :hover {
      background-color: ${(props) => props.theme.text.main_5};
    }
  }
`;

export const LoadBidsSimpleModalWrapper = styled.div<{ type: 'big' | 'small' }>`
  width: fit-content;
  height: fit-content;
  padding: 56px 80px;
  background-color: ${(props) => props.theme.bg.secondary};
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  max-width: ${(props) => (props.type === 'big' ? '715px' : '615px')};
  border-radius: 8px;
  > p {
    width: auto;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.15px;
    margin-bottom: 48px;
    text-align: center;
  }
`;

export const LoadBitsModalButtonsWrapper = styled.div`
  width: fit-content;
  gap: 24px;
  display: flex;
  margin: auto;
`;

export const ModalStyledTextFiled = styled(TextField)`
  && {
    height: 118px;
    border: 1.5px solid ${(props) => props.theme.text.main_20};
    /* padding: 16px; */
    > div {
      height: 100%;
      > textarea {
        color: ${(props) => props.theme.text.main_100};
        height: 100% !important;
      }
    }
  }
`;

export const ModalInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

export const LoadBidRatingWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 32px;
  justify-content: center;
`;
