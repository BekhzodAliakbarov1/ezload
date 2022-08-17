import {
  customerLinks,
  driverLinks,
  profileCustomer,
  profileDrivers,
} from 'components/navbar/nav-links';

import Text from 'components/typography/text';
import { Link } from 'react-router-dom';
import { useTheme } from 'global-state/theme/theme.state';
import logoLight from 'assets/img/logo-light.svg';
import logoDark from 'assets/img/logo-white.svg';
import ChevronDownIcon from 'components/icons/chevron-down.icon';
import { useMenu } from 'hooks/use-menu';
import { useAuth } from 'global-state/auth/auth.state';
import { Drawer, IconButton, Menu } from '@mui/material';
import { useDriver } from 'hooks/use-driver';
import MenuCloseIcon from 'components/icons/menu-close.icon';
import MenuIcon from 'components/icons/menu.icon';
import { useState } from 'react';
import {
  ProfileAndLanguageWrapper,
  RightContentItemWrapper,
  StyledDropdownButton,
  StyledMenu,
  StyledtText,
  NavbarMobileMenuOpenList,
  CloseIconWrapper,
  NavbarLinksWrapper,
  NavbarLogoWrapper,
  NavbarMobileMenu,
} from './nav-auth.styles';
import { useTranslation } from 'react-i18next';

const NavbarAuth = () => {
  const account = useMenu();
  const language = useMenu();
  const [state, setState] = useState(false);
  const { i18n } = useTranslation();

  const { logout } = useAuth();
  const { theme } = useTheme();
  const { isDriver } = useDriver();

  const toggleDrawer = (open: boolean) => () => {
    setState(open);
  };

  const languageClickHandler = ({
    lng,
  }: {
    lng: 'uz' | 'ru' | 'en' | 'tr';
  }) => {
    i18n.changeLanguage(lng);

    language.handleClose();
  };

  const accountProfile = isDriver ? profileDrivers : profileCustomer;
  const accountLinks = isDriver ? driverLinks : customerLinks;

  return (
    <>
      <NavbarLinksWrapper>
        {accountLinks.map((link) => {
          return (
            <Link to={link.to} key={link.id}>
              <Text weight="600" size="md">
                {link.name}
              </Text>
            </Link>
          );
        })}
      </NavbarLinksWrapper>
      <NavbarLogoWrapper isDriver={isDriver}>
        <Link to="/">
          <img src={theme === 'dark' ? logoDark : logoLight} alt="logo" />
        </Link>
      </NavbarLogoWrapper>
      <ProfileAndLanguageWrapper>
        <RightContentItemWrapper className="menu">
          <Text size="md" weight="600">
            My Account
          </Text>
          <StyledDropdownButton onClick={account.handleClick}>
            <ChevronDownIcon size="30" />
          </StyledDropdownButton>
          <StyledMenu
            id="basic-menu"
            anchorEl={account.element}
            open={account.isMenuOpen}
            onClose={account.handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            {accountProfile.map((item) => (
              <Link onClick={account.handleClose} key={item.id} to={item.to}>
                <StyledtText>{item.name}</StyledtText>
              </Link>
            ))}
            <a onClick={logout}>
              <StyledtText>Log out</StyledtText>
            </a>
          </StyledMenu>
        </RightContentItemWrapper>

        <RightContentItemWrapper>
          <Text size="md" weight="600">
            {i18n.language}
          </Text>
          <StyledDropdownButton onClick={language.handleClick}>
            <ChevronDownIcon size="30" />
          </StyledDropdownButton>
          <Menu
            sx={{
              '& .MuiPaper-root': {
                width: '100px',
              },
            }}
            id="basic-menu"
            anchorEl={language.element}
            open={language.isMenuOpen}
            onClose={language.handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <StyledtText onClick={() => languageClickHandler({ lng: 'en' })}>
              En
            </StyledtText>
            <StyledtText onClick={() => languageClickHandler({ lng: 'uz' })}>
              Uz
            </StyledtText>
            <StyledtText onClick={() => languageClickHandler({ lng: 'ru' })}>
              Ru
            </StyledtText>
            <StyledtText onClick={() => languageClickHandler({ lng: 'tr' })}>
              Tr
            </StyledtText>
          </Menu>
        </RightContentItemWrapper>
        <NavbarMobileMenu onClick={toggleDrawer(true)}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Text>Menu</Text>
        </NavbarMobileMenu>
      </ProfileAndLanguageWrapper>
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        <NavbarMobileMenuOpenList>
          <CloseIconWrapper onClick={toggleDrawer(false)}>
            <IconButton>
              <MenuCloseIcon />
            </IconButton>
            <Text>Menu</Text>
          </CloseIconWrapper>
          {accountLinks.map((link) => {
            return (
              <Link onClick={toggleDrawer(false)} to={link.to} key={link.id}>
                <StyledtText>{link.name}</StyledtText>
              </Link>
            );
          })}
          {accountProfile.map((item) => (
            <Link onClick={toggleDrawer(false)} key={item.id} to={item.to}>
              <StyledtText>{item.name}</StyledtText>
            </Link>
          ))}
          <a onClick={logout}>
            <StyledtText>Log out</StyledtText>
          </a>
        </NavbarMobileMenuOpenList>
      </Drawer>
    </>
  );
};

export default NavbarAuth;
