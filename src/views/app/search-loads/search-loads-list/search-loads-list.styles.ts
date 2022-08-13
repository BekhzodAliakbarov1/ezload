import styled from 'styled-components';

export const SearchLoadsListWrapper = styled.div`
  width: 100%;
  padding-left: 58px;
  > p {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 40px;
  }
  @media (max-width: 800px) {
    padding: 0px;
    > p {
      font-size: 20px;
      text-align: left;
    }
  }
`;
