import { IconButton } from '@mui/material';
import styled from 'styled-components';
export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  > p {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.25px;
    color: ${(props) => props.theme.text.main_40};
  }
`;

export const EditableFieldWrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;

export const PersonalInformationSvgWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  > p {
    letter-spacing: 0.15px;
    text-decoration-line: underline;
    color: ${(props) => props.theme.text.main_70};
  }
`;

export const StyledIconButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;

export const EditFiedlForm = styled.form`
  display: flex;
  gap: 18px;
  input {
    width: 266px;
    font-weight: 600;
    ::-webkit-inner-spin-button {
      display: none;
    }
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  button {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: #ffffff;
    height: 46px;
    width: 100%;
  }
  p {
    margin-top: 14px;
    line-height: 20px;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const VerificationCodeWrapper = styled.div`
  margin-top: 32px;
  > p {
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_70};
    margin-bottom: 33px;
  }
`;

export const ConfirmVerificationCodeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  /* margin-bottom: 32px; */
  max-width: 360px;
  p {
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    text-decoration-line: underline;
  }
`;
