import {
  EmptySpaceDiv,
  NavbarLogoWrapper,
  ProfileAndLanguageWrapper,
  RightContentItemWrapper,
  StyledDropdownButton,
} from './nav-unauth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from 'global-state/theme/theme.state';
import { LoginButton } from '../../navbar-shared.styles';
import logoLight from 'assets/img/logo-light.svg';
import logoDark from 'assets/img/logo-white.svg';
import Text from 'components/typography/text';
import ChevronDownIcon from 'components/icons/chevron-down.icon';
import { useMenu } from 'hooks/use-menu';
import { Menu, MenuItem } from '@mui/material';

const NavbarUnAuth = () => {
  const { theme } = useTheme();
  const language = useMenu();
  const navigate = useNavigate();

  return (
    <>
      <EmptySpaceDiv />
      <NavbarLogoWrapper isDriver>
        <Link to="/">
          <img src={theme === 'dark' ? logoDark : logoLight} alt="logo" />
        </Link>
      </NavbarLogoWrapper>
      <ProfileAndLanguageWrapper>
        <RightContentItemWrapper>
          <Text size="md" weight="600">
            En
          </Text>
          <StyledDropdownButton onClick={language.handleClick}>
            <ChevronDownIcon size="30" />
          </StyledDropdownButton>
          <Menu
            id="basic-menu"
            anchorEl={language.element}
            open={language.isMenuOpen}
            onClose={language.handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={language.handleClose}>En</MenuItem>
            <MenuItem onClick={language.handleClose}>Uz</MenuItem>
            <MenuItem onClick={language.handleClose}>Ru</MenuItem>
          </Menu>
        </RightContentItemWrapper>
        <LoginButton onClick={() => navigate('/auth/login')}>Login</LoginButton>
      </ProfileAndLanguageWrapper>
    </>
  );
};

export default NavbarUnAuth;
