import { TextField } from '@mui/material';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const DateInputComponentWrapper = styled.div`
  width: fit-content;
  gap: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const StyledTextFiled = styled(TextField)`
  width: 269px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  border: 1.5px solid ${colors.dark_20};
`;
