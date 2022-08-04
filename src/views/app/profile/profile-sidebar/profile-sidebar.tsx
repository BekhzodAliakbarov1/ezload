import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileSidebarWrapper, StyledLink } from './profile-sidebar.styles';
import { useLocation } from 'react-router-dom';
import Text from 'components/typography/text';
import { useDriver } from 'hooks/use-driver';

const ProfileSidebar = () => {
  const { pathname } = useLocation();
  const { isDriver } = useDriver();

  return (
    <>
      <ProfileSidebarWrapper>
        <Text weight="700">Profile page</Text>
        {isDriver ? (
          // Driver Links
          <div>
            <Link to="/profile">
              <StyledLink active={pathname === '/profile'} weight="700">
                Account details
              </StyledLink>
            </Link>
            <Link to="/profile/my-loads">
              <StyledLink
                active={pathname === '/profile/my-loads'}
                weight="700"
              >
                My loads
              </StyledLink>
            </Link>
            <Link to="/profile/my-statistics">
              <StyledLink
                active={pathname === '/profile/my-statistics'}
                weight="700"
              >
                My statistics
              </StyledLink>
            </Link>
            <Link to="/profile/my-routes">
              <StyledLink
                active={pathname === '/profile/my-routes'}
                weight="700"
              >
                My routes
              </StyledLink>
            </Link>
            <Link to="/profile/my-rates">
              <StyledLink
                active={pathname === '/profile/my-rates'}
                weight="700"
              >
                Rates & Testimonials
              </StyledLink>
            </Link>
          </div>
        ) : (
          // Customer Links
          <div>
            <Link to="/profile">
              <StyledLink active={pathname === '/profile'} weight="700">
                Personal information
              </StyledLink>
            </Link>
            <Link to="/profile/my-loads">
              <StyledLink
                active={pathname === '/profile/my-loads'}
                weight="700"
              >
                My loads
              </StyledLink>
            </Link>
            <Link to="/profile/my-addresses">
              <StyledLink active={pathname.includes('address')} weight="700">
                My addresses
              </StyledLink>
            </Link>
          </div>
        )}
      </ProfileSidebarWrapper>
    </>
  );
};

export default ProfileSidebar;
