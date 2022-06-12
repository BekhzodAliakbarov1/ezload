import styled from 'styled-components';
import { colors } from 'styles/variables';

export const CreatorSignInFirstStepWrapper = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > p {
    font-size: 24px;
  }
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

export const FirstStepDataWrapper = styled.div`
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
    button {
      margin-top: 22px;
      margin-bottom: 6px;
    }
    p {
      letter-spacing: 0.15px;
      span {
        color: ${colors.red_80};
        cursor: pointer;
      }
    }
  }
`;

export const PhoneNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 31px 0px;
`;

export const LineDiv = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.dark_20};
  margin: 40px 0px;
`;
