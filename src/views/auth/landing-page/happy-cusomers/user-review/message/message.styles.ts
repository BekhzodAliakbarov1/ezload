import styled from 'styled-components';
import { colors } from 'styles/variables';

export const MessageWrapper = styled.div`
  max-width: 569px;
  width: 100%;
  height: auto;
  position: relative;
`;

export const MessageBox = styled.div`
  padding: 16px 24px 12px 24px;
  text-align: left;
  width: 100%;
  border-radius: 8px;
  background-color: ${(props) => props.theme.bg.main};
  margin-bottom: 27px;
  ::after {
    content: '';
    position: absolute;
    left: 19px;
    bottom: -23px;
    width: 0;
    height: 0;
    border-radius: 8px;
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
    border-top: 20px solid ${(props) => props.theme.bg.main};
    clear: both;
  }
`;

export const Quote = styled.div`
  position: absolute;
  right: 20px;
  bottom: -16px;
`;
