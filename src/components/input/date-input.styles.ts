import { TextField } from '@mui/material';
import styled from 'styled-components';

export const DateInputComponentWrapper = styled.div`
  width: fit-content;

  gap: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  > div {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  input {
    color: ${(props) => props.theme.text.main_100};
  }
  svg {
    fill: ${(props) => props.theme.text.main_100};
  }
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    > div {
      width: 100%;
    }
    > div > p {
      width: 40px;
    }
  }
`;

export const StyledTextFiled = styled(TextField)`
  && {
    width: 269px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    border: 1.5px solid ${(props) => props.theme.text.main_20};
    color: white;
    @media (max-width: 800px) {
      width: 250px;
    }
  }
`;
