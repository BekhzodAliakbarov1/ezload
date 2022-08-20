import styled from 'styled-components';
import { colors } from 'styles/variables';

export const SearchLoadsWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 80px;
  background-color: ${(props) => props.theme.bg.secondary};
  @media (max-width: 800px) {
    margin-top: 32px;
    margin-bottom: 30px;
  }
`;

export const SearchLoadsBox = styled.div`
  padding: 48px 0px;
  display: flex;
  @media (max-width: 800px) {
    padding: 20px 24px;
    flex-direction: column;
    gap: 32px;
  }
`;
