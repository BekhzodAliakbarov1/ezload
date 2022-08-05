import styled from 'styled-components';

export const ProfileAddressWrapper = styled.div`
  width: 100%;
  padding: 0px 43px 43px 48px;
  @media (max-width: 800px) {
    padding: 30px 24px;
  }
`;

export const ProfileAddressTopPartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 54px;
  > p {
    font-size: 24px;
    line-height: 24px;
  }
  @media (max-width: 800px) {
    margin-bottom: 40px;
    button {
      display: none !important;
    }
  }
`;

export const ProfileAddressesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;
