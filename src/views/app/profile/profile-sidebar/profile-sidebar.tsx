import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileSidebarWrapper, StyledLink } from './profile-sidebar.styles';
import { useLocation } from 'react-router-dom';
import Text from 'components/typography/text';
import { useDriver } from 'hooks/use-driver';
import { useTranslation } from 'react-i18next';

const ProfileSidebar = () => {
  const { pathname } = useLocation();
  const { isDriver } = useDriver();
  const { t } = useTranslation();

  return (
    <>
      <ProfileSidebarWrapper>
        <Text weight="700">{t('Profile page')}</Text>
        {isDriver ? (
          // Driver Links
          <div>
            <Link to="/profile">
              <StyledLink active={pathname === '/profile'} weight="700">
                {t('Account details')}
              </StyledLink>
            </Link>
            <Link to="/profile/my-loads?name=new">
              <StyledLink
                active={pathname === '/profile/my-loads'}
                weight="700"
              >
                {t('My Loads')}
              </StyledLink>
            </Link>
            <Link to="/profile/my-statistics">
              <StyledLink
                active={pathname === '/profile/my-statistics'}
                weight="700"
              >
                {t('My statistics')}
              </StyledLink>
            </Link>
            <Link to="/profile/my-routes">
              <StyledLink
                active={pathname === '/profile/my-routes'}
                weight="700"
              >
                {t('My routes')}
              </StyledLink>
            </Link>
            <Link to="/profile/my-rates">
              <StyledLink
                active={pathname === '/profile/my-rates'}
                weight="700"
              >
                {t('Rates & Testimonials')}
              </StyledLink>
            </Link>
            <Link to="/profile/notifications">
              <StyledLink
                active={pathname === '/profile/notifications'}
                weight="700"
              >
                {t('Notifications')}
              </StyledLink>
            </Link>
          </div>
        ) : (
          // Customer Links
          <div>
            <Link to="/profile">
              <StyledLink active={pathname === '/profile'} weight="700">
                {t('Personal information')}
              </StyledLink>
            </Link>
            <Link to="/profile/my-loads?name=new">
              <StyledLink active={pathname.includes('my-loads')} weight="700">
                {t('My Loads')}
              </StyledLink>
            </Link>
            <Link to="/profile/my-addresses">
              <StyledLink active={pathname.includes('address')} weight="700">
                {t('My addresses')}
              </StyledLink>
            </Link>
            <Link to="/profile/notifications">
              <StyledLink
                active={pathname === '/profile/notifications'}
                weight="700"
              >
                {t('Notifications')}
              </StyledLink>
            </Link>
          </div>
        )}
      </ProfileSidebarWrapper>
    </>
  );
};

export default ProfileSidebar;
