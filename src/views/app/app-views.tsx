import ProfileLayout from 'layouts/profile-layout/profile-layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import Feed from './feed/feed';
import ActionLoadLayout from 'layouts/load-action-layout';
import SearchDriverLayout from 'layouts/search-driver-layout';
import DriverInfoLayout from 'layouts/driver-info-layout/driver-info-layout';
import SearchLoadLayout from 'layouts/search-load-layout';
import { useDriver } from 'hooks/use-driver';
import LoadInfoLayout from 'layouts/load-info-layout';

const CustomerView = () => (
  <Routes>
    <Route path="/" element={<Feed />} />
    <Route path="/profile/*" element={<ProfileLayout />} />
    <Route path="/create-load" element={<ActionLoadLayout />} />
    <Route path="/edit-load" element={<ActionLoadLayout />} />
    <Route path="/search-driver" element={<SearchDriverLayout />} />
    <Route path="/drivers/:id" element={<DriverInfoLayout />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const DriverView = () => (
  <Routes>
    <Route path="/" element={<Feed />} />
    <Route path="/profile/*" element={<ProfileLayout />} />
    <Route path="/search-load" element={<SearchLoadLayout />} />
    <Route path="/load/:id" element={<LoadInfoLayout />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const AppViews = () => {
  const { isDriver } = useDriver();
  return <>{isDriver ? <DriverView /> : <CustomerView />}</>;
};

export default AppViews;
