import { lazy } from 'react';
const ProfileLayout = lazy(
  () => import('layouts/profile-layout/profile-layout')
);
const ActionLoadLayout = lazy(() => import('layouts/load-action-layout'));
const SearchDriverLayout = lazy(() => import('layouts/search-driver-layout'));
const DriverInfoLayout = lazy(
  () => import('layouts/driver-info-layout/driver-info-layout')
);
const SearchLoadLayout = lazy(() => import('layouts/search-load-layout'));
const LoadInfoLayout = lazy(() => import('layouts/load-info-layout'));
import { Navigate, Route, Routes } from 'react-router-dom';
import Feed from './feed/feed';
import { useDriver } from 'hooks/use-driver';

const CustomerView = () => (
  <Routes>
    <Route path="/" element={<Feed />} />
    <Route path="/profile/*" element={<ProfileLayout />} />
    <Route path="/create-load" element={<ActionLoadLayout />} />
    <Route path="/edit-load" element={<ActionLoadLayout />} />
    <Route path="/search-driver" element={<SearchDriverLayout />} />
    <Route path="/drivers/:id" element={<DriverInfoLayout />} />
    <Route path="/load-bidded-driver/:bid_id" element={<DriverInfoLayout />} />
    <Route path="/load/:load_id" element={<LoadInfoLayout />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const DriverView = () => (
  <Routes>
    <Route path="/" element={<Feed />} />
    <Route path="/profile/*" element={<ProfileLayout />} />
    <Route path="/search-load" element={<SearchLoadLayout />} />
    <Route path="/load/:load_id" element={<LoadInfoLayout />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const AppViews = () => {
  const { isDriver } = useDriver();
  return <>{isDriver ? <DriverView /> : <CustomerView />}</>;
};

export default AppViews;
