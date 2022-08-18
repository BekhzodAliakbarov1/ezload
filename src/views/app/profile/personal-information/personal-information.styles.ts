import styled from 'styled-components';

export const PersonalInformationWrapper = styled.div`
  padding-left: 96px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    padding-left: 0px;
    margin-top: 44px;
    padding: 0px 24px;
  }
`;

export const PersonalInformationTopPartWrapper = styled.div<{
  isDriver: boolean;
}>`
  width: 100%;
  display: flex;
  gap: 47px;
  align-items: flex-start;
  padding-bottom: ${(props) => (props.isDriver ? '64px' : '0px')};
  border-bottom: ${(props) =>
    props.isDriver ? `2px solid ${props.theme.text.main_5}` : ''};
  margin-bottom: 64px;
  @media (max-width: 800px) {
    flex-direction: column;
    > div:nth-child(1) {
      margin: auto;
    }
  }
`;

export const NamePhoneNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
