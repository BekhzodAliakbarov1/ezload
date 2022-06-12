import styled from 'styled-components';
import Box, { BoxProps } from '@mui/material/Box';

const InputWrapper = styled(Box)<BoxProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

export default InputWrapper;
