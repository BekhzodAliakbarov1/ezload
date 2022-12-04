import {
  customerLinks,
  driverLinks,
  profileCustomer,
  profileDrivers,
} from 'components/navbar/nav-links';

import Text from 'components/typography/text';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from 'global-state/theme/theme.state';
import logoLight from 'assets/img/logo-light.svg';
import logoDark from 'assets/img/logo-dark.png';
import ChevronDownIcon from 'components/icons/chevron-down.icon';
import { useMenu } from 'hooks/use-menu';
import { Badge, Drawer, IconButton, Menu } from '@mui/material';
import { useDriver } from 'hooks/use-driver';
import MenuCloseIcon from 'components/icons/menu-close.icon';
import MenuIcon from 'components/icons/menu.icon';
import { useState } from 'react';
import {
  ProfileAndLanguageWrapper,
  RightContentItemWrapper,
  StyledMenu,
  StyledtText,
  NavbarMobileMenuOpenList,
  CloseIconWrapper,
  NavbarLinksWrapper,
  NavbarLogoWrapper,
  NavbarMobileMenu,
  NavbarLanguageWrapper,
} from './nav-auth.styles';
import { useTranslation } from 'react-i18next';
import { DarkLightModeSwitch } from 'components/right-light-mode-switch';
import LogoutModal from 'components/modals/logout-modal';
import RingIcon from 'components/icons/ring.icon';
import { useNotificationsList } from 'server-state/queries/use-notification-list';

const NavbarAuth = () => {
  const navigate = useNavigate();
  const account = useMenu();
  const language = useMenu();
  const [state, setState] = useState(false);
  const { t, i18n } = useTranslation();
  const { data } = useNotificationsList();

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
    localStorage.setItem('language', lng);
    language.handleClose();
  };

  const accountProfile = isDriver ? profileDrivers : profileCustomer;
  const accountLinks = isDriver ? driverLinks : customerLinks;

  return (
    <>
      <NavbarLinksWrapper>
        {accountLinks.map((link) => {
          return (
            <Link className="links" to={link.to} key={link.id}>
              <Text weight="600" size="md">
                {t(link.name)}
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
        <DarkLightModeSwitch />
        <IconButton onClick={() => navigate('/profile/notifications')}>
          <Badge badgeContent={data?.pages[0].unwatched_count} color="error">
            <RingIcon size="20" />
          </Badge>
        </IconButton>
        <RightContentItemWrapper className="menu">
          <IconButton
            disableFocusRipple
            disableRipple
            onClick={account.handleClick}
          >
            <Text size="md" weight="600">
              {t('My Account')}
            </Text>
            <ChevronDownIcon size="30" />
          </IconButton>
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
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            {accountProfile.map((item) => (
              <Link onClick={account.handleClose} key={item.id} to={item.to}>
                <StyledtText>{t(item.name)}</StyledtText>
              </Link>
            ))}
            <LogoutModal>
              <h3>
                <StyledtText>{t('Log out')}</StyledtText>
              </h3>
            </LogoutModal>
          </StyledMenu>
        </RightContentItemWrapper>

        <RightContentItemWrapper>
          <IconButton
            disableFocusRipple
            disableRipple
            onClick={language.handleClick}
            className="language"
          >
            <Text size="md" weight="600">
              {i18n.language}
            </Text>
            <ChevronDownIcon size="30" />
          </IconButton>
          <Menu
            sx={{
              '& .MuiPaper-root': {
                width: '100px',
                // left: '-100px !important',
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
                <StyledtText>{t(link.name)}</StyledtText>
              </Link>
            );
          })}
          {accountProfile.map((item) => (
            <Link onClick={toggleDrawer(false)} key={item.id} to={item.to}>
              <StyledtText>{t(item.name)}</StyledtText>
            </Link>
          ))}
          <NavbarLanguageWrapper>
            <IconButton
              disableFocusRipple
              disableRipple
              onClick={language.handleClick}
            >
              <Text size="md" weight="600">
                {i18n.language}
              </Text>
              <ChevronDownIcon size="18" />
            </IconButton>
            <Menu
              sx={{
                '& .MuiPaper-root': {
                  width: '100px',
                  // left: '-100px !important',
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
          </NavbarLanguageWrapper>
          <LogoutModal>
            <h3>
              <StyledtText>{t('Log out')}</StyledtText>
            </h3>
          </LogoutModal>
        </NavbarMobileMenuOpenList>
      </Drawer>
    </>
  );
};

export default NavbarAuth;
