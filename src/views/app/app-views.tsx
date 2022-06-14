import ProfileLayout from 'layouts/profile-layout/profile-layout';
import { Route, Routes } from 'react-router-dom';
import Feed from './feed/feed';
import ActionLoadLayout from 'layouts/load-action-layout';

const AppViews = () => (
  <Routes>
    <Route path="/" element={<Feed />} />
    <Route path="/create-load" element={<ActionLoadLayout />} />
    <Route path="/edit-load" element={<ActionLoadLayout />} />
    <Route path="/profile/*" element={<ProfileLayout />} />
  </Routes>
);
export default AppViews;
