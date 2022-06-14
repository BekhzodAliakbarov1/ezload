import React from 'react';
import ProfileView from 'views/app/profile/profile';
import styled from 'styled-components';

const ProfileLayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ProfileLayout = () => {
  return (
    <ProfileLayoutWrapper>
      <ProfileView />
    </ProfileLayoutWrapper>
  );
};

export default ProfileLayout;
