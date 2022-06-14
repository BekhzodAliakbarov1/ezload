import { TextField } from '@mui/material';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const LoadExtraInformationWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 16px;
  > p {
    letter-spacing: 0.15px;
    color: ${colors.dark_80};
    margin-bottom: 24px;
  }
`;

export const LoadExtraInformationInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
`;

export const LoadExtraInformationLeftSideInputsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 269px;
  justify-content: space-between;
`;

export const LoadExtraInformationPriceInputWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  max-width: 96px;
  height: 47px;
  border: 1.5px solid ${colors.dark_20};
  > div {
    padding: 0px;
  }
`;

export const StyledTextFiled = styled(TextField)`
  max-width: 506px;
  height: 118px;
  border: 1.5px solid ${colors.dark_20};
  padding: 16px;
  > div {
    height: 100%;
    > textarea {
      height: 100% !important;
    }
  }
`;
