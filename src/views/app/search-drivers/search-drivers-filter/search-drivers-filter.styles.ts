import { IconButton } from '@mui/material';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const SearchDriversFilterWrapper = styled.div`
  width: 100%;
  max-width: 466px;
  padding: 0px 65px 0px 48px;
  > p {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 40px;
  }
  border-right: 1px solid ${(props) => props.theme.text.main_5};
  @media (max-width: 800px) {
    display: none;
  }
`;

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

export const FilterMobileNavbar = styled.div`
  display: none;
  @media (max-width: 800px) {
    cursor: pointer;
    width: 100vw;
    margin-left: -24px;
    height: min-content;
    padding: 13px 24px;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.text.main_50};
    transition: background-color 0.1s ease;

    p {
      color: ${(props) => props.theme.text.main_20};
    }
    button {
      padding: 0px;
      margin-right: 17px;
    }
    :hover {
      background-color: ${(props) => props.theme.text.main_70};
    }
  }
`;

export const FilterMobileDrawerContainer = styled.div`
  width: 100vw;
  height: 100%;
  top: 0;
  padding: 0px 24px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  flex-direction: column;
  > p {
    font-size: 24px;
  }
`;

export const StyledCloseButton = styled(IconButton)`
  && {
    position: absolute;
    top: 30px;
    right: 30px;
  }
`;
