import styled from 'styled-components';
import { colors } from 'styles/variables';

export const CreatorSignInThirdStepWrapper = styled.div`
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
  height: 100%;
  max-height: 290px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-size: 24px;
    margin: 40px 0px;
  }
  form {
    display: flex;
    align-items: center;
  }
  @media (max-width: 800px) {
    max-height: 400px;
    form {
      margin-bottom: 40px;
    }
  }
`;

export const PictureAndNameWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
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
