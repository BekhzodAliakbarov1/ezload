import styled from 'styled-components';
import { colors } from 'styles/variables';

export const ReactCodeInputWrapper = styled.div<{
  error?: boolean;
  size: 'lg' | 'md';
}>`
  width: 100%;

  div {
    width: 100% !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${(props) => (props.size === 'lg' ? '74px' : '55px')};
    /* margin-bottom: 40px; */
    > div {
      input {
        padding: 0px 8px 16px 8px;
        height: 100% !important;
        width: ${(props) => (props.size === 'lg' ? '49px' : '40px')} !important;
        border: none !important;
        border-top-right-radius: 0px !important;
        border-top-left-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
        border-bottom-left-radius: 0px !important;
        background-color: transparent;
        border-bottom: 4px solid
          ${(props) => (props.error ? colors.red_100 : colors.dark_30)} !important;
        font-size: ${(props) =>
          props.size === 'lg' ? '48px' : '32px'} !important;
        font-weight: 700;
        color: ${(props) => props.theme.text.main_90};

        :focus-visible {
          outline: none;
        }
      }
    }
  }
  @media (max-width: 800px) {
    div > div input {
      width: ${(props) => (props.size === 'lg' ? '40px' : '31px')} !important;
      font-size: ${(props) =>
        props.size === 'lg' ? '40px' : '28px'} !important;
    }
  }
`;
