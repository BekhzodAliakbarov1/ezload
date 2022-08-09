import Text from 'components/typography/text';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import {
  customerLinks,
  driverLinks,
  profileCustomer,
  profileDrivers,
} from './nav-links';
import { useRef } from 'react';
import {
  RightContentItemWrapper,
  NavbarLinksWrapper,
  NavbarWrapper,
  ProfileAndLanguageWrapper,
  StyledDropdownButton,
  NavbarLogoWrapper,
  StyledtText,
  NavbarPositionEffectEraiser,
  NabarBox,
  JustFunComponent,
  JustFunComponentTwo,
  StyledMenu,
} from './navbar-shared.styles';
import logoLight from 'assets/img/logo-light.svg';
import logoDark from 'assets/img/logo-white.svg';
import ChevronDownIcon from 'components/icons/chevron-down.icon';
import { useMenu } from 'hooks/use-menu';
import { useAuth } from 'global-state/auth/auth.state';
import { Switch } from '@mui/material';
import { useDriver } from 'hooks/use-driver';
import { useTheme } from 'global-state/theme/theme.state';
import NavbarUnAuth from './nav-types/nav-unauth';
import NavbarDriver from './nav-types/nav-driver';
import NavbarCustomer from './nav-types/nav-customer';

const Navbar: React.FC<{ isLoggedIn?: boolean }> = ({ isLoggedIn = true }) => {
  const account = useMenu();
  const language = useMenu();
  const { userType, login, logout, tokens } = useAuth();
  const { isDriver } = useDriver();
  const { toggleTheme, theme } = useTheme();
  const accountProfile = isDriver ? profileDrivers : profileCustomer;
  const accountLinks = isDriver ? driverLinks : customerLinks;
  const headerRef = useRef<HTMLDivElement>(null);
  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    if (headerRef.current) {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos || currentScrollPos < 1) {
        headerRef.current.style.top = '0';
      } else {
        headerRef.current.style.top = '-100px';
      }
      prevScrollpos = currentScrollPos;
    }
  };
  const clickHandler = () => {
    if (isDriver) {
      login({
        tokens: {
          access: 'd9b452c2e3e55c10280c10da8afdda551fd6399e',
          refresh: '1221',
        },
        userId: '12',
        userType: 'customer',
      });
    } else {
      login({
        tokens: {
          access: 'f740af2bdf75d9be2fe56289a7e068dbdae99c05',
          refresh: '1221',
        },
        userId: '21',
        userType: 'driver',
      });
    }
  };
  return (
    <>
      <NabarBox>
        <NavbarWrapper>
          {tokens.access ? (
            <>{isDriver ? <NavbarDriver /> : <NavbarCustomer />}</>
          ) : (
            <NavbarUnAuth />
          )}
        </NavbarWrapper>
      </NabarBox>

      {/* <NabarBox ref={headerRef} isLoggedIn={isLoggedIn}>
        <NavbarWrapper>
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
            {isLoggedIn ? (
              <RightContentItemWrapper>
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
                    <Link
                      onClick={account.handleClose}
                      key={item.id}
                      to={item.to}
                    >
                      <StyledtText>{item.name}</StyledtText>
                    </Link>
                  ))}
                  <a onClick={logout}>
                    <StyledtText>Log out</StyledtText>
                  </a>
                </StyledMenu>
              </RightContentItemWrapper>
            ) : (
              <>
                <Link to="/auth/login">Login</Link>
              </>
            )}
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
          </ProfileAndLanguageWrapper>
        </NavbarWrapper>
      </NabarBox> */}

      <NavbarPositionEffectEraiser />
      {/* <JustFunComponent>
        <Text>{userType}</Text>
        <Switch onClick={clickHandler} />
      </JustFunComponent> */}
      {/*<JustFunComponentTwo>
        <Text>{theme}</Text>
        <Switch onClick={toggleTheme} />
      </JustFunComponentTwo> */}
    </>
  );
};
export default Navbar;
