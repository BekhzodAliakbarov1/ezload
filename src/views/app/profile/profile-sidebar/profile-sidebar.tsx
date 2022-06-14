import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileSidebarWrapper, StyledLink } from './profile-sidebar.styles';
import { useLocation } from 'react-router-dom';
import Text from 'components/typography/text';

const ProfileSidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <ProfileSidebarWrapper>
      <Text weight="700">Profile page</Text>
      <Link to="/profile">
        <StyledLink active={pathname === '/profile'} weight="700">
          Personal information
        </StyledLink>
      </Link>
      <Link to="/profile/my-loads">
        <StyledLink active={pathname === '/profile/my-loads'} weight="700">
          My loads
        </StyledLink>
      </Link>
      <Link to="/profile/my-addresses">
        <StyledLink active={pathname.includes('address')} weight="700">
          My addresses
        </StyledLink>
      </Link>
    </ProfileSidebarWrapper>
  );
};

export default ProfileSidebar;
