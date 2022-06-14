import Text from 'components/typography/text';
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { links } from './nav-links';
import {
  RightContentItemWrapper,
  NavbarLinksWrapper,
  NavbarWrapper,
  ProfileAndLanguageWrapper,
  StyledDropdownButton,
  NavbarLogoWrapper,
  StyledtText,
  NavbarPositionEffectEraiser,
} from './navbar.styles';
import logo from 'assets/img/logo-light.svg';
import ChevronDownIcon from 'components/icons/chevron-down.icon';
import { useMenu } from 'hooks/use-menu';

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

const Navbar = () => {
  const account = useMenu();
  const language = useMenu();
  return (
    <>
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
              <Link to="/profile">
                <StyledtText>Profile</StyledtText>
              </Link>
              <Link to="/">
                <StyledtText>My Loads</StyledtText>
              </Link>
              <Link to="/">
                <StyledtText>My adresses</StyledtText>
              </Link>
              <Link to="/">
                <StyledtText>Log out</StyledtText>
              </Link>
            </StyledMenu>
          </RightContentItemWrapper>
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
              {/* languages will implemented also */}
              <MenuItem onClick={language.handleClose}>Profile</MenuItem>
            </Menu>
          </RightContentItemWrapper>
        </ProfileAndLanguageWrapper>
      </NavbarWrapper>
      <NavbarPositionEffectEraiser />
    </>
  );
};

export default Navbar;
