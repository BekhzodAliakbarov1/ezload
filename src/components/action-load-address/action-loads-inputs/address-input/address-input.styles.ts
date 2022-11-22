import { Select } from '@mui/material';
import styled from 'styled-components';

export const StyledSelectInput = styled(Select)`
  && {
    border-radius: 2px;
    text-align: left;
    max-width: 353px;
    color: ${(props) => props.theme.text.main_100};
    fieldset {
      color: ${(props) => props.theme.text.main_100};
      border: 1px solid ${(props) => props.theme.text.main_20};
    }
    input {
      color: ${(props) => props.theme.text.main_100};
    }
    svg {
      color: ${(props) => props.theme.text.main_100};
    }
    .MuiSelect-select {
      padding-top: 11.5px;
    }
  }
`;
