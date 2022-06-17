import Text from 'components/typography/text';
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { links, profile } from './nav-links';
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
  NavbarLoginButton,
  NabarBox,
} from './navbar.styles';
import logo from 'assets/img/logo-light.svg';
import ChevronDownIcon from 'components/icons/chevron-down.icon';
import { useMenu } from 'hooks/use-menu';
import Button from 'components/button/button';

const StyledMenu = styled((props: MenuProps) => (
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
    minWidth: 154,
    minHeight: 160,
    marginLeft: -100,
    paddingBottom: 44,
  },
}));

const Navbar: React.FC<{ isLoggedIn?: boolean }> = ({ isLoggedIn = true }) => {
  const account = useMenu();
  const language = useMenu();

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
      // if (currentScrollPos < 1) {
      //   headerRef.current.style.top = '0';
      // }
      prevScrollpos = currentScrollPos;
    }
  };

  return (
    <>
      <NabarBox ref={headerRef} isLoggedIn={isLoggedIn}>
        <NavbarWrapper>
          <NavbarLinksWrapper>
            {links.map((link) => {
              return (
                <Link to={link.to} key={link.id}>
                  <Text weight="600" size="md">
                    {link.name}
                  </Text>
                </Link>
              );
            })}
          </NavbarLinksWrapper>
          <NavbarLogoWrapper>
            <Link to="/">
              <img src={logo} alt="logo" />
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
                  {profile.map((item) => (
                    <Link
                      onClick={account.handleClose}
                      key={item.id}
                      to={item.to}
                    >
                      <StyledtText>{item.name}</StyledtText>
                    </Link>
                  ))}
                  <Link to="/">
                    <StyledtText>Log out</StyledtText>
                  </Link>
                </StyledMenu>
              </RightContentItemWrapper>
            ) : (
              <>
                <NavbarLoginButton>
                  <Text weight="600">Login</Text>
                </NavbarLoginButton>
                <Link to="/auth/creator/login">Sign Up</Link>
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
                {/* <MenuItem onClick={language.handleClose}>Uz</MenuItem> */}
                {/* <MenuItem onClick={language.handleClose}>Ru</MenuItem> */}
              </Menu>
            </RightContentItemWrapper>
          </ProfileAndLanguageWrapper>
        </NavbarWrapper>
      </NabarBox>
      <NavbarPositionEffectEraiser />
    </>
  );
};

export default Navbar;
