import styled from 'styled-components';
import { colors } from 'styles/variables';

export const ProfileAddressWrapper = styled.div`
  width: 100%;
  padding: 0px 43px 43px 48px;
`;

export const ProfileAddressTopPartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 54px;
  > p {
    color: ${colors.dark_100};
    font-size: 24px;
    line-height: 24px;
  }
`;

export const ProfileAddressesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
