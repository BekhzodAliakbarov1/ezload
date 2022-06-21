import styled from 'styled-components';
import MuiButton from '@mui/material/Button';
import { colors } from 'styles/variables';

export const CheckUserTypeWrapper = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const CheckUserTypeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 517px;
  > p {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 40px;
  }
`;

export const LoginStyledButton = styled(MuiButton)`
  && {
    background: #f5fbfa;

    border: 1px solid ${colors.dark_40};
    border-radius: 2px;
    color: ${colors.dark_100};
    margin-bottom: 32px;
    height: 46px;
    font-weight: 700;
  }
`;
