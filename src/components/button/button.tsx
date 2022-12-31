import React from 'react';
import { StyledButton, StyledProgress } from './button.styles';
import { ButtonProps } from './button.types';

const Button: React.FC<ButtonProps> = ({
  loading = false,
  disabled = false,
  type = 'submit',
  buttonType,
  ...props
}) => {
  return (
    <StyledButton
      aria-label="Button"
      type={type}
      loading={loading}
      disabled={disabled}
      {...props}
      buttonType={disabled ? 'disabled' : buttonType}
    >
      {props.children}
      {loading ? (
        <StyledProgress
          buttonType={disabled ? 'disabled' : buttonType}
          size="1.2em"
        />
      ) : null}
    </StyledButton>
  );
};

Button.defaultProps = {
  buttonType: 'contained',
};

export default Button;
