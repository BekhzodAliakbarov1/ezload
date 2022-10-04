import { Select, TextField } from '@mui/material';
import styled from 'styled-components';

export const SearchLoadsFilterInputsWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const SearchLoadsFiltersBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  > p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    margin-bottom: 16px;
  }
  > div {
    width: 100%;
    /* max-width: 234px; */
  }
  input,
  svg {
    color: ${(props) => props.theme.text.main_100};
  }
`;

export const StyledTextFiled = styled(TextField)`
  width: 269px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  border: 1.5px solid ${(props) => props.theme.text.main_20};
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  max-width: 96px;
  height: 47px;
  fieldset {
    border: 1.5px solid ${(props) => props.theme.text.main_20};
  }
  text-align: left;
  > div {
    padding: 0px;
    padding-left: 16px;
    color: ${(props) => props.theme.text.main_100};
  }
`;

export const SearchLoadsFilterButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 8px;

  @media (max-width: 800px) {
    margin-bottom: 30px;
  }
`;
