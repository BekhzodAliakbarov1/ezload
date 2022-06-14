import ProfileLayout from 'layouts/profile-layout/profile-layout';
import { Route, Routes } from 'react-router-dom';
import CreateLoad from './create-load/create-load';
import Feed from './feed/feed';

const AppViews = () => (
  <Routes>
    <Route path="/" element={<Feed />} />
    <Route path="/create-load" element={<CreateLoad />} />
    <Route path="/profile/*" element={<ProfileLayout />} />
  </Routes>
);
export default AppViews;
