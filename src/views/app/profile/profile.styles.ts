import styled from 'styled-components';

export const ProfileViewWrapper = styled.div`
  margin-top: 40px;
  background-color: ${(props) => props.theme.bg.secondary};
  margin-bottom: 130px;
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
