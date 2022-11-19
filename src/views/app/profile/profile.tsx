import React from 'react';
import ProfileSidebar from './profile-sidebar/profile-sidebar';
import { ProfileViewFlexBox, ProfileViewWrapper } from './profile.styles';
import { Route, Routes, Navigate } from 'react-router-dom';
import PersonalInformation from './personal-information/personal-information';
import ProfileLoads from './profile-loads/profile-loads';
import ProfileAddress from './profile-address/profile-address';
import CreateEditAddress from './create-edit-address';
import { useDriver } from 'hooks/use-driver';
import PersonalStatistics from './personal-statistics';
import ProfileRoutes from './profile-routes';
import ProfileRate from './profile-rate';
import ProfileNotifications from './profile-notifications/profile-notifications';

const CustomerProfileView = () => (
  <Routes>
    <Route path="/" element={<PersonalInformation />} />
    <Route path="/my-loads" element={<ProfileLoads />} />
    <Route path="/my-addresses" element={<ProfileAddress />} />
    <Route path="/create-address" element={<CreateEditAddress />} />
    <Route path="/edit-address" element={<CreateEditAddress />} />
    <Route path="/notifications" element={<ProfileNotifications />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const DriverProfileView = () => (
  <Routes>
    <Route path="/" element={<PersonalInformation />} />
    <Route path="/my-loads" element={<ProfileLoads />} />
    <Route path="/my-statistics" element={<PersonalStatistics />} />
    <Route path="/my-routes" element={<ProfileRoutes />} />
    <Route path="/my-rates" element={<ProfileRate />} />
    <Route path="/notifications" element={<ProfileNotifications />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const ProfileView = () => {
  const { isDriver } = useDriver();
  return (
    <ProfileViewWrapper>
      <ProfileViewFlexBox>
        <ProfileSidebar />
        {isDriver ? <DriverProfileView /> : <CustomerProfileView />}
      </ProfileViewFlexBox>
    </ProfileViewWrapper>
  );
};

export default ProfileView;
