import styled from 'styled-components';

export const LoadButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  margin-top: 64px;
  margin-bottom: 104px;
  max-width: 500px;

  @media (max-width: 800px) {
    margin-top: 40px;
    margin-bottom: 56px;
    flex-direction: column;
  }
  button {
    max-width: 100%;
  }
`;
