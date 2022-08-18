import styled from 'styled-components';

export const ActionLoadWrapper = styled.form`
  width: 100%;
  max-width: 1290px;
  height: 100%;
  background-color: ${(props) => props.theme.bg.secondary};
  margin-top: 40px;
  margin-bottom: 80px;
  padding: 48px 52px;
  > p {
    font-size: 24px;
  }
  @media (max-width: 800px) {
    margin-top: 20px;
    padding: 30px 24px;
    > {
      font-size: 18px;
    }
  }
`;
