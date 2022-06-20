import ProfileLayout from 'layouts/profile-layout/profile-layout';
import { Route, Routes } from 'react-router-dom';
import Feed from './feed/feed';
import ActionLoadLayout from 'layouts/load-action-layout';
import SearchDriverLayout from 'layouts/search-driver-layout';
import DriverInfoLayout from 'layouts/driver-info-layout/driver-info-layout';
import SearchLoadLayout from 'layouts/search-load-layout';

const AppViews = () => (
  <Routes>
    <Route path="/" element={<Feed />} />
    <Route path="/create-load" element={<ActionLoadLayout />} />
    <Route path="/edit-load" element={<ActionLoadLayout />} />
    <Route path="/profile/*" element={<ProfileLayout />} />
    <Route path="/search-driver/*" element={<SearchDriverLayout />} />
    <Route path="/search-load/*" element={<SearchLoadLayout />} />
    <Route path="/drivers/:id" element={<DriverInfoLayout />} />
  </Routes>
);

export default AppViews;
