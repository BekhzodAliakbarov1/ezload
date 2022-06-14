import Text from 'components/typography/text';
import React from 'react';
import ProfileSidebar from './profile-sidebar/profile-sidebar';
import { ProfileViewFlexBox, ProfileViewWrapper } from './profile.styles';
import { Route, Routes } from 'react-router-dom';
import PersonalInformation from './personal-information/personal-information';
import ProfileLoads from './profile-loads/profile-loads';
import ProfileAddress from './profile-address/profile-address';
import CreateAddress from './create-address/create-address';

const ProfileView = () => {
  return (
    <ProfileViewWrapper>
      <ProfileViewFlexBox>
        <ProfileSidebar />
        <Routes>
          <Route path="/" element={<PersonalInformation />} />
        </Routes>
        <Routes>
          <Route path="/my-loads" element={<ProfileLoads />} />
        </Routes>
        <Routes>
          <Route path="/my-addresses" element={<ProfileAddress />} />
        </Routes>
        <Routes>
          <Route path="/create-address" element={<CreateAddress />} />
        </Routes>
        <Routes>
          <Route path="/edit-address" element={<CreateAddress />} />
        </Routes>
      </ProfileViewFlexBox>
    </ProfileViewWrapper>
  );
};

export default ProfileView;
