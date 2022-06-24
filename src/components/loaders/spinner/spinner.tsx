import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled, { css } from 'styled-components';
import Box from '@mui/material/Box';
import isIOS from 'utils/is-IOS';
import IosSpinner from '../ios-spinner';

const iosStyles = css`
  color: ${(props) => props.theme.text.main_100};
`;

const StyledProgress = styled(isIOS() ? IosSpinner : CircularProgress)`
  color: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.colors.primary
      : theme.colors.primary};
  ${isIOS() ? iosStyles : ''}
`;

interface Props {
  width?: number | string;
  height?: number | string;
  loading?: boolean;
  loaderSize?: number | string;
  className?: string;
}

const Spinner: React.FC<Props> = (props) => (
  <>
    {props.loading ? (
      <Box
        width={props.width}
        height={props.height}
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={props.className}
      >
        <StyledProgress className="spinner-progress" size={props.loaderSize} />
      </Box>
    ) : (
      props.children
    )}
  </>
);

Spinner.defaultProps = {
  width: '100%',
  height: '60vh',
  loading: false,
  loaderSize: 30,
};

export default Spinner;
