import styled from 'styled-components';
import { colors } from 'styles/variables';
import { IconButton } from '@mui/material';

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 92px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1296px;
  position: fixed;
  position: relative;
`;

export const NavbarLogoWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NavbarLinksWrapper = styled.div`
  width: 100%;
  max-width: 361px;
  display: flex;
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
`;
export const RightContentItemWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  p {
    letter-spacing: 0.15px;
  }
`;

export const StledDropdownButton = styled(IconButton)`
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

  color: ${colors.dark_70};
  text-align: left;
  padding: 12px 0px;
  padding-left: 16px;
  :hover {
    background-color: ${colors.green_20};
  }
`;
