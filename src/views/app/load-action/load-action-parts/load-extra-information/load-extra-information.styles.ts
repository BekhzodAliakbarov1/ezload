import { TextField } from '@mui/material';
import Select from '@mui/material/Select';
import styled from 'styled-components';

export const LoadExtraInformationWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 16px;
  > p {
    letter-spacing: 0.15px;
    margin-bottom: 24px;
  }
`;

export const LoadExtraInformationInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const LoadExtraInformationLeftSideInputsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 269px;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 100%;
    max-width: 100%;
    gap: 16px;
  }
`;

export const LoadExtraInformationPriceInputWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  max-width: 96px;
  height: 47px;
  fieldset {
    border: 1.5px solid ${(props) => props.theme.text.main_20};
  }
  color: ${(props) => props.theme.text.main_100} !important;

  svg {
    color: ${(props) => props.theme.text.main_100};
  }
  > div {
    padding: 0px;
  }
`;

export const StyledTextFiled = styled(TextField)`
  && {
    max-width: 506px;
    height: 118px;
    fieldset {
      border: 1.5px solid ${(props) => props.theme.text.main_20};

      :focus-visible {
        border: none;
      }
    }
    > div {
      height: 100%;
      border: none !important;
      > textarea {
        color: ${(props) => props.theme.text.main_100};
        height: 100% !important;
      }
    }
  }
`;
