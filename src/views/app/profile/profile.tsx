import Text from 'components/typography/text';
import React from 'react';
import ProfileSidebar from './profile-sidebar/profile-sidebar';
import { ProfileViewFlexBox, ProfileViewWrapper } from './profile.styles';
import { Route, Routes } from 'react-router-dom';
import PersonalInformation from './personal-information/personal-information';

const ProfileView = () => {
  return (
    <ProfileViewWrapper>
      <Text weight="700">Profile page</Text>
      <ProfileViewFlexBox>
        <ProfileSidebar />
        <Routes>
          <Route path="/" element={<PersonalInformation />} />
        </Routes>
      </ProfileViewFlexBox>
    </ProfileViewWrapper>
  );
};

export default ProfileView;
