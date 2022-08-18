import styled from 'styled-components';

export const SearchDriversListWrapper = styled.div`
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
export const SearchDriversListItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 16px 0px;
  margin-bottom: 96px;
  gap: 35px;
  @media (max-width: 800px) {
    > a {
      width: 100%;
    }
  }
`;
