import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { IPaperProps } from './popper.types';

export const StyledPaper = styled(Paper)<IPaperProps>`
  && {
    background-color: ${(props) => props.theme.bg.secondary};
    color: ${(props) => props.theme.text.main_100};
    border-radius: 4px;
    ${(props) => props.paperstyles}
  }
`;

export const StyledBox = styled(Box)`
  /* z-index: 1000; */
  display: block;
`;
