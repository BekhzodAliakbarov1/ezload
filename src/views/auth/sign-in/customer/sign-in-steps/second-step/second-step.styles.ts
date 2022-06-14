import styled from 'styled-components';
import { colors } from 'styles/variables';

export const CreatorSignInSecondStepWrapper = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ErrorMessageWrapper = styled.div`
  width: 100%;
  max-width: 460px;
  position: absolute;
  top: 118px;
`;

export const ErrorMessageData = styled.div`
  width: fit-content;
  padding: 16px;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  background-color: #e55656;
  border-radius: 2px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`;

export const SecondStepDataWrapper = styled.div`
  width: 100%;
  max-width: 460px;
  height: 100%;
  max-height: 290px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  form {
    width: 100%;
    height: 100%;
    h3 {
      cursor: pointer;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.15px;
      text-decoration-line: underline;
      color: ${colors.dark_90};
      padding-bottom: 3px;
    }
    button {
      margin-top: 22px;
      margin-bottom: 48px;
    }
    p:nth-child(1) {
      font-size: 24px;
      margin: 16px 0px;
    }
    p:nth-child(2) {
      margin-top: 16px;
      margin-bottom: 35px;
    }
  }
`;

export const ConfirmCodeWrapper = styled.div<{ error?: boolean }>`
  width: 100%;
  margin-bottom: 40px;
`;
