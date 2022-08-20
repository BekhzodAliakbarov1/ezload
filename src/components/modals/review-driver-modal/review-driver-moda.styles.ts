import { TextField } from '@mui/material';
import styled from 'styled-components';

export const ChildrenWrapper = styled.div`
  width: fit-content;
  height: fit-content;
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

export const LoadBidRatingWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 32px;
  justify-content: center;
`;

export const ModalInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
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

export const LoadBitsModalButtonsWrapper = styled.div`
  width: fit-content;
  gap: 24px;
  display: flex;
  margin: auto;
`;
