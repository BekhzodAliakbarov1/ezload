import { TextField } from '@mui/material';
import styled from 'styled-components';

export const ChildrenWrapper = styled.div`
  /* width: fit-content;
  height: fit-content; */
`;

export const ModalWrapper = styled.form`
  width: fit-content;
  height: fit-content;
  padding: 56px 80px;
  background-color: ${(props) => props.theme.bg.secondary};
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
  @media (max-width: 800px) {
    max-width: 90vw;
    width: 100%;
    padding: 24px;
    .header {
      font-size: 18px;
      margin-bottom: 16px;
    }
  }
`;

export const ModalInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalStyledTextFiled = styled(TextField)`
  && {
    max-width: 506px;
    height: 118px;
    border: 1.5px solid ${(props) => props.theme.text.main_20};
    > div {
      height: 100%;
      > textarea {
        color: ${(props) => props.theme.text.main_100};
        height: 100% !important;
      }
    }
  }
`;

export const ModalButtonsWrapper = styled.div`
  width: max-content;
  display: flex;
  gap: 16px;
  margin: auto;
  button {
    width: max-content;
  }
`;
