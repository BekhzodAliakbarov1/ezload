/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
import React, { useState, InputHTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import Label from 'components/typography/label';
import ErrorMessage from 'components/typography/error-message-input';
import InputWrapper from './input-wrapper';
// import EyeIcon from 'components/icons/eye.icon';
import IconButton from '@mui/material/IconButton';
import { BoxProps } from '@mui/material/Box';
import { colors } from '../../styles/variables';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
  label?: string;
  startIcon?: React.ReactNode;
  ContainerProps?: BoxProps;
  size?: any;
}

const errorStyle = css`
  border-color: ${colors.red_100};
  color: ${colors.red_100};
`;

const StartIconButton = styled(IconButton)`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  svg {
    width: 15px;
    height: 15px;
  }
`;

const hasStartIconStyles = css`
  padding-left: 40px;
`;

const StyledInput = styled.input<InputProps>`
  width: 100%;
  /* background-color: ${(props) => props.theme.colors.primary}; */
  outline: none;
  border: 2px solid ${(props) => props.theme.text.main_20};
  border-radius: 2px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  padding: 12px 13px;
  color: ${(props) => props.theme.text.main_100};

  &:placeholder-shown ~ span {
    display: none;
  }
  ::placeholder {
    font-size: 16px;
    line-height: 20px;
    color: ${(props) => props.theme.text.main_40};
  }
  ${(props) => (props.startIcon ? hasStartIconStyles : '')}

  @media (max-width: ${(props) => props.theme.sizes.sm}) {
    /* width: 343px; */
    font-size: 14px;
  }
  ${(props) => (props.error ? errorStyle : '')}
`;
// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [hidden] = useState(true);
  return (
    <InputWrapper {...props.ContainerProps}>
      {props.label ? <Label>{props.label ?? ''}</Label> : null}
      <div style={{ position: 'relative' }}>
        {props.startIcon && (
          <StartIconButton>{props.startIcon}</StartIconButton>
        )}
        <StyledInput
          ref={ref}
          {...props}
          type={
            props.type !== 'password'
              ? props.type
              : hidden
              ? 'password'
              : 'text'
          }
        />
      </div>

      {props.error ? <ErrorMessage>{props.error}</ErrorMessage> : null}
    </InputWrapper>
  );
});

export default Input;
