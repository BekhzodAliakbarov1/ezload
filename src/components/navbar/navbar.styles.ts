import styled from 'styled-components';
import { colors } from 'styles/variables';
import { IconButton } from '@mui/material';

export const NabarBox = styled.div<{ isLoggedIn: boolean }>`
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: ${(props) => (props.isLoggedIn ? 'center' : 'center')};
  z-index: 1000;
  background-color: ${colors.green_5};
  transition: all 0.5s ease;
`;

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 92px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1290px;
  padding: 0px 10px;
  /* margin: auto; */
`;

export const NavbarLogoWrapper = styled.div<{ isDriver: boolean }>`
  cursor: pointer;
  margin-left: ${(props) => (props.isDriver ? '10%' : '')};
`;

export const NavbarLinksWrapper = styled.div`
  width: 100%;
  max-width: fit-content;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  a {
    color: ${colors};
  }
  p {
    letter-spacing: 0.15px;
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

export const StyledtText = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.5px;

  color: ${(props) => props.theme.text.main_70};
  text-align: left;
  padding: 12px 0px;
  padding-left: 16px;
  :hover {
    background-color: ${colors.green_20};
  }
`;

export const NavbarPositionEffectEraiser = styled.div`
  width: 100vw;
  height: 92px;
  background-color: ${colors.green_5};
  z-index: 10;
`;

export const JustFunComponent = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: red;
  z-index: 10000;
`;
