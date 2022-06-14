import styled from 'styled-components';
import { colors } from 'styles/variables';

export const ProfileViewWrapper = styled.div`
  margin-top: 40px;
  background-color: ${colors.white};
  margin-bottom: 80px;
  padding: 48px;
  > p {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 48px;
  }
`;

export const ProfileViewFlexBox = styled.div`
  display: flex;
  align-items: flex-start;
`;
