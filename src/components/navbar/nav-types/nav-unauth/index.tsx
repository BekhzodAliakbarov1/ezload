import {
  EmptySpaceDiv,
  NavbarLogoWrapper,
  ProfileAndLanguageWrapper,
  RightContentItemWrapper,
  StyledDropdownButton,
  StyledtText,
} from './nav-unauth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from 'global-state/theme/theme.state';
import { LoginButton } from '../../navbar-shared.styles';
import logoLight from 'assets/img/logo-light.svg';
import logoDark from 'assets/img/logo-dark.png';
import Text from 'components/typography/text';
import ChevronDownIcon from 'components/icons/chevron-down.icon';
import { useMenu } from 'hooks/use-menu';
import { Menu } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DarkLightModeSwitch } from 'components/right-light-mode-switch';

const NavbarUnAuth = () => {
  const { theme } = useTheme();
  const language = useMenu();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const languageClickHandler = ({
    lng,
  }: {
    lng: 'uz' | 'ru' | 'en' | 'tr';
  }) => {
    i18n.changeLanguage(lng);

    language.handleClose();
  };

  return (
    <>
      <EmptySpaceDiv />
      <NavbarLogoWrapper isDriver>
        <Link to="/">
          <img src={theme === 'dark' ? logoDark : logoLight} alt="logo" />
        </Link>
      </NavbarLogoWrapper>
      <ProfileAndLanguageWrapper>
        <DarkLightModeSwitch />

        <RightContentItemWrapper>
          <Text size="md" weight="600">
            En
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
        <LoginButton onClick={() => navigate('/auth/login')}>
          {t('Login')}
        </LoginButton>
      </ProfileAndLanguageWrapper>
    </>
  );
};

export default NavbarUnAuth;
