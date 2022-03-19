import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import styled from 'styled-components';

interface Props extends Omit<BoxProps, 'bgcolor'> {
  bgcolor?: string;
}

const StyledBox = styled(Box)<Props>`
  background-color: ${(props) => props.bgcolor || props.theme.bg.main};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MainWrapper: React.FC<Props> = (props) => (
  <StyledBox component="main" {...props} />
);

export default MainWrapper;
