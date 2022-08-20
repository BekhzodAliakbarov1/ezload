import styled from 'styled-components';
import { colors } from 'styles/variables';

export const ChildrenWrapper = styled.div`
  /* width: fit-content;
  height: fit-content; */
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
  @media (max-width: 800px) {
    width: 90vw;
    height: fit-content;
    padding: 24px;
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
    background-color: ${(props) => props.theme.bg.secondary};
    color: ${(props) => props.theme.text.main_70};
    :hover {
      background-color: ${(props) => props.theme.text.main_5};
    }
  }
  @media (max-width: 800px) {
    margin-top: 0px;
    width: 100%;
    gap: 12px;
    button {
      width: fit-content;
    }
  }
`;
