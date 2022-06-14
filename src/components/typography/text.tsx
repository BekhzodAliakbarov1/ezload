import React from 'react';
import styled, { css } from 'styled-components';

const sizes = {
  sm: css`
    font-size: 13px;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      font-size: 12px;
    }
  `,
  md: css`
    font-size: 16px;
  `,
  lg: css`
    font-size: 18px;
    @media (max-width: ${(props) => props.theme.sizes.xl}) {
      font-size: 16px;
    }
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      font-size: 16px;
    }
    @media (max-width: ${(props) => props.theme.sizes.sm}) {
      font-size: 16px;
    }
  `,
};

interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'light' | 'main';
  className?: string;
  weight?: string;
  onClick?: () => void;
}

const StyledText = styled.p<TextProps>`
  height: fit-content;
  width: fit-content;
  color: ${(props) => props.theme.text[props.color ?? 'main']};
  ${(props) => sizes[props.size ?? 'lg']};
  font-weight: ${(props) => props.weight};
  letter-spacing: 0.5px;
`;

const Text: React.FC<TextProps> = ({
  children,
  size,
  weight = '500',
  color,
  ...other
}) => (
  <StyledText color={color} size={size} weight={weight} {...other}>
    {children}
  </StyledText>
);

Text.defaultProps = {
  size: 'lg',
  color: 'light',
};

export default Text;
