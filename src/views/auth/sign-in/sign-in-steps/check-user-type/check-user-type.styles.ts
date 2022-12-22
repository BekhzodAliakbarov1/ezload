import styled from 'styled-components';
import MuiButton from '@mui/material/Button';

export const CheckUserTypeWrapper = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const CheckUserTypeBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 517px;
  > p {
    text-align: center;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 40px;
  }
  button {
    text-transform: uppercase !important;
  }
  @media (max-width: 1140px) {
    max-width: 400px;
  }
  @media (max-width: 800px) {
    max-width: 302px;
  }
`;
