import styled from 'styled-components';
import { colors } from 'styles/variables';

export const ActionLoadWrapper = styled.div`
  width: 100%;
  max-width: 1290px;
  height: 100%;
  background-color: ${colors.white};
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
