import styled from 'styled-components';
import { colors } from 'styles/variables';

export const LoadCardButtonWrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.text.main_60};
  padding: 8px 16px;
  border-radius: 2px;
  gap: 20px;
  p {
    font-size: 13px;
    line-height: 16px;
    color: ${colors.white};
    cursor: pointer;
  }
`;
