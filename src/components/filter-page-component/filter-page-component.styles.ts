import { IconButton } from '@mui/material';
import styled from 'styled-components';

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

export const SearchFilterWrapper = styled.div`
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
