import styled from 'styled-components';
import { colors } from 'styles/variables';
import { IconButton, Menu, MenuProps } from '@mui/material';

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

export const NavbarLinksWrapper = styled.div`
  width: 100%;
  max-width: fit-content;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  align-items: center;

  p {
    letter-spacing: 0.15px;
  }
  @media (max-width: 640px) {
    display: none;
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

export const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 4,
    marginTop: theme.spacing(1),
    minWidth: 174,
    minHeight: 160,
    marginLeft: -100,
    paddingBottom: 44,
  },
}));

export const NavbarMobileMenu = styled.div`
  display: none;
  @media (max-width: 640px) {
    cursor: pointer;
    display: flex;
    width: fit-content;
    align-items: center;
  }
`;

export const NavbarMobileMenuOpenList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 240px;
  background-color: ${(props) => props.theme.bg.secondary};
  top: 0;
  right: 0;
  a {
    width: 100%;
  }
`;

export const CloseIconWrapper = styled.div`
  width: 100%;
  height: 88px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
