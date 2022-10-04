import { Select } from '@mui/material';
import styled from 'styled-components';

export const StyledSelectInput = styled(Select)`
  && {
    border: 1px solid ${(props) => props.theme.text.main_20};
    border-radius: 2px;
    text-align: left;
    max-width: 353px;
    color: ${(props) => props.theme.text.main_100};

    svg {
      color: ${(props) => props.theme.text.main_100};
    }
  }
`;
