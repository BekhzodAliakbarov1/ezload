import { IconButton } from '@mui/material';
import styled from 'styled-components';

export const AddressCardWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding-bottom: 32px;
  border-bottom: 2px solid ${(props) => props.theme.text.main_5};
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
    text-align: left;
    color: ${(props) => props.theme.text.main_100};
  }
  @media (max-width: 1000px) {
    p {
      margin-bottom: 32px;
    }
    height: auto;
    align-items: flex-start;
    flex-direction: column;
  }
  @media (max-width: 800px) {
    p {
      font-size: 16px;
      text-align: left;
    }
  }
`;

export const AddressCardButtonsWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 32px;
  .edit-button {
    max-height: 40px;
    padding: 5px !important;
    width: 140px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
