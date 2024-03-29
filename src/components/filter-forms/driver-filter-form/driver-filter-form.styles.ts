import styled from 'styled-components';

export const SearchDriversFilterForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > p {
    font-size: 16px;
    line-height: 20px;
    /* identical to box height, or 125% */

    letter-spacing: 0.15px;
    margin-bottom: 16px;
  }
  > span {
    display: flex;
    gap: 8px;
  }
`;

export const SearchDriversFilterFromCountryWrapper = styled.div`
  display: flex;

  width: 100%;
  flex-direction: column;
  gap: 17px;
  margin-bottom: 33px;
`;

export const SearchDriversFilterToCountryWrapper = styled.div`
  display: flex;

  width: 100%;
  flex-direction: column;
  gap: 17px;
  margin-bottom: 41px;
`;

export const SearchDriversFilterWeightWrapper = styled.div`
  width: 100%;
  margin-bottom: 57px;
`;

export const SearchDriversFilterButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 64px;
`;
