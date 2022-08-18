import styled from 'styled-components';
import { colors } from 'styles/variables';

export const DriverSignInThirdStepWrapper = styled.form`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0px 24px;
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

export const ThirdStepDataWrapper = styled.div`
  width: 100%;
  max-width: 460px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-size: 24px;
    margin-bottom: 32px;
  }
  @media (max-width: 800px) {
    max-height: 80vh;
    p {
      margin-bottom: 20px;
    }
  }
`;

export const PictureAndNameWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 20px;
    align-items: center;
    > label {
      margin-bottom: 20px;
    }
  }
`;

export const ProfilePhotoUploaderWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${colors.green_30};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 26px;
  :hover {
    background-color: ${colors.green_60};
  }
  @media (max-width: 800px) {
    margin-right: 0px;
  }
`;

export const NameInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    margin-bottom: 16px;
    color: ${(props) => props.theme.text.main_70};
  }
`;

export const SignInStepShowInfoWrapper = styled.div`
  width: auto;
  margin-left: auto;
  margin-bottom: 40px;
  p {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.25px;
  }
`;

export const TruckInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  margin-bottom: 48px;
  > p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_70};
    margin-bottom: 32px;
  }
  input {
    margin-bottom: 16px;
    width: 100%;
  }
`;
