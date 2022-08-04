import styled from 'styled-components';
import { colors } from 'styles/variables';

export const ProfileViewWrapper = styled.div`
  margin-top: 40px;
  background-color: ${colors.white};
  margin-bottom: 80px;
  padding: 48px;
  @media (max-width: 800px) {
    padding: 0px;
  }
`;

export const ProfileViewFlexBox = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
