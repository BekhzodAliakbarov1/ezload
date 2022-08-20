import styled, { css } from 'styled-components';
import MuiButton from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import { ButtonProps } from './button.types';
import IosSpinner from '../loaders/ios-spinner';
import isIOS from '../../utils/is-IOS';
import { colors as globalColors } from 'styles/variables';

const colors = {
  contained: css`
    background-color: ${(props) => props.theme.button.contained};
    color: ${(props) => props.theme.text.light};
    &:hover {
      background-color: ${(props) => props.theme.button.contained_hover};
    }
  `,
  dark: css`
    background-color: ${(props) => props.theme.button.dark};
    color: ${(props) => props.theme.text.light};
    &:hover {
      background-color: ${(props) => props.theme.button.dark_hover};
    }
  `,
  secondary_dark: css`
    background-color: ${(props) => props.theme.button.secondary_dark};
    color: ${(props) => props.theme.text.main_100};
    &:hover {
      background-color: ${(props) => props.theme.button.secondary_dark_hover};
    }
  `,
  warning: css`
    background-color: ${(props) => props.theme.button.warning};
    color: ${(props) => props.theme.text.light};
    &:hover {
      background-color: ${(props) => props.theme.button.warning_hover};
    }
  `,
  white: css`
    background-color: ${(props) => props.theme.bg.secondary};
    color: ${globalColors.red_100};
    &:hover {
      background-color: ${(props) => props.theme.bg.main};
    }
  `,
  disabled: css`
    background-color: ${globalColors.dark_40};
    color: ${globalColors.white} !important;
    &:hover {
      background-color: ${(props) => props.theme.bg.main};
    }
  `,
};

const loadingStyles = css`
  pointer-events: none;
  color: transparent !important;
`;

export const StyledProgress = styled(isIOS() ? IosSpinner : CircularProgress)<
  Pick<ButtonProps, 'buttonType'>
>`
  position: absolute;
  color: ${(props) => props.theme.text.main_100};
`;

export const StyledButton = styled(MuiButton).withConfig({
  shouldForwardProp: (prop) => !['loading', 'buttonType'].includes(prop),
})<ButtonProps>`
  width: max-content;
  && {
    position: relative;
    line-height: 1.25;
    border-radius: 4px;
    outline: none;
    border: 1px solid transparent;
    transition: all 0.2s ease;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    padding: 0.75em 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: unset;
    font-weight: 700;
    ${(props) => colors[props.buttonType ?? 'contained']};
    ${(props) => (props.loading ? loadingStyles : '')}
    @media (max-width: ${(props) => props.theme.sizes.sm}) {
      font-size: 14px;
      width: 100%;
    }
  }
`;
