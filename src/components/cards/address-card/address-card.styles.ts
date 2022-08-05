import { IconButton } from '@mui/material';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const AddressCardWrapper = styled.div`
  width: 100%;
  height: 72px;
  border-bottom: 1px solid ${(props) => props.theme.text.main_10};
  @media (max-width: 800px) {
    height: auto;
  }
`;

export const AddressCardDataLine = styled.div`
  width: 100%;
  height: 40px;
  /* border-bottom: 1px solid ${(props) => props.theme.text.main_10}; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.15px;
  }
  @media (max-width: 800px) {
    p {
      font-size: 16px;
      text-align: left;
      margin-bottom: 32px;
    }
    height: auto;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const AddressCardButtonsWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 32px;
  button {
    max-height: 40px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: ${colors.white};
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
  @media (max-width: 800px) {
    max-width: 90vw;
    padding: 24px;
    height: auto;
    > p {
      font-size: 16px;
      margin-bottom: 24px;
    }
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
    background-color: ${colors.white};
    color: ${(props) => props.theme.text.main_70};
    :hover {
      background-color: ${(props) => props.theme.text.main_5};
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 12px;
  }
`;
