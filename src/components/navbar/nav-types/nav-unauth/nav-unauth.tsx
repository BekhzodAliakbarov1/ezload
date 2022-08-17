import styled from 'styled-components';
import { colors } from 'styles/variables';
import { IconButton } from '@mui/material';

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 92px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  max-width: 1290px;
  /* padding: 0px 10px; */
  margin: auto;
  @media (max-width: 640px) {
    height: 88px;
    padding: 0px 24px;
  }
`;

export const ProfileAndLanguageWrapper = styled.div`
  width: fit-content;
  display: flex;
  height: 100%;
  align-items: center;
  gap: 24px;
  a {
    padding: 4px 12px 6px;
    background: ${colors.red_90};
    border-radius: 2px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: #f5fbfa;
    :hover {
      background: ${colors.red_100};
    }
  }
  @media (max-width: 640px) {
    gap: 0px;
    .menu {
      display: none;
    }
  }
`;
export const RightContentItemWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  /* margin-right: 20px; */
  p {
    letter-spacing: 0.15px;
  }
`;

export const StyledDropdownButton = styled(IconButton)`
  && {
    min-width: unset;
    width: 32px;
    height: 32px;
    margin-left: 4px;
    position: relative;
  }
`;

export const NavbarLogoWrapper = styled.div<{ isDriver?: boolean }>`
  cursor: pointer;
  margin-left: ${(props) => (props.isDriver ? '10%' : '0%')};
  img {
    height: 60px;
  }
  @media (max-width: 640px) {
    margin-left: 0%;
    img {
      height: 40px;
    }
  }
`;

export const EmptySpaceDiv = styled.div`
  display: block;
  @media (max-width: 640px) {
    display: none;
  }
`;

export const StyledtText = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.5px;

  color: ${(props) => props.theme.text.main_70};
  text-align: left;
  padding: 12px 0px;
  padding-left: 16px;
  cursor: pointer;
  :hover {
    background-color: ${colors.green_20};
  }
`;
